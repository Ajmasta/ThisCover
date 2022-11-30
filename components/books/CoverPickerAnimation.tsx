import { View, Text, StyleSheet } from "react-native";
import React, { useState, useRef } from "react";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";
import BookCover from "../../components/books/BookCover";
import SwipeText from "../../components/books/SwipeText";
import { getData, resetData, storeData } from "../../utils/storage/storage";
import { IBookSummary } from "../../utils/api/constants";
interface IGenres {
  genres: string[];
}
type ContextType = {
  translateX: number;
  translateY: number;
};
interface Props {
  i: number;
  setPressed: React.Dispatch<React.SetStateAction<string>>;
  book: IBookSummary;
}

const CoverPickerAnimation = ({ i, setPressed, book }: Props) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const theta = useRef(`${Math.random() * 10}deg`);
  const [choice, setChoice] = useState<string>("");
  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
      const distance = translateX.value;
    },
    onEnd: () => {
      const distance = translateX.value;

      if (distance < -150 || distance > 150) {
        translateX.value = withDelay(300, withSpring(5 * translateX.value));
        translateY.value = withSpring(0);
        if (distance > 0) {
          runOnJS(setChoice)("Saved");
          runOnJS(storeData)("savedBooks", book);
        } else {
          runOnJS(setChoice)("Discarded");
        }
      } else {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    },
  });
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        { rotateZ: theta.current },
        {
          translateY: translateY.value,
        },
      ],
    };
  });
  return (
    <PanGestureHandler onGestureEvent={panGestureEvent}>
      <Animated.View style={[styles.square, rStyle]}>
        <BookCover
          imageUrl={book?.cover}
          id={String(book.book_id)}
          setPressed={setPressed}
        />
        <SwipeText text={choice} />
      </Animated.View>
    </PanGestureHandler>
  );
};

export default CoverPickerAnimation;

const styles = StyleSheet.create({
  square: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    elevation: 20,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    position: "relative",
  },
});
