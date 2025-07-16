import { Button } from "@/components";
import { GestureResponderEvent } from "react-native";

type MaxProps = {
  onPress?: (e: GestureResponderEvent) => void;
};

export function Max({ onPress }: MaxProps) {
  return (
    <Button
      variant="link"
      className="h-auto p-0 text-xs"
      onPress={onPress}
    >
      MAX
    </Button>
  );
}
