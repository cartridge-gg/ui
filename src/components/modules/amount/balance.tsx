import { GestureResponderEvent, Pressable } from "react-native";

type BalanceProps = {
  value: number;
  symbol: string;
  onPress?: (e: GestureResponderEvent) => void;
};

export function Balance({ value, symbol, onPress }: BalanceProps) {
  return (
    <Pressable
      className="flex cursor-pointer items-center gap-1 text-xs text-foreground-300 hover:text-foreground-200"
      onPress={onPress}
    >
      <span>{value.toLocaleString()}</span>
      <span>{symbol}</span>
    </Pressable>
  );
}
