import { Thumbnail } from "@/index";
import { cn } from "@/utils";

export interface PaymentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  icon: React.ReactNode;
  network: string;
  networkIcon: React.ReactNode;
  className?: string;
}

export const PaymentCard = ({
  text,
  icon,
  network,
  networkIcon,
  className,
  ...props
}: PaymentCardProps) => {
  return (
    <div
      className={cn(
        "group flex flex-row gap-2 bg-background-200 hover:bg-background-300 rounded-lg p-3 justify-between cursor-pointer",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <Thumbnail
          icon={icon}
          size="md"
          className="bg-background-300 group-hover:bg-background-400"
          rounded
        />
        <span>{text}</span>
      </div>
      {network && (
        <div className="flex items-center gap-1 text-foreground-200 text-sm border border-background-300 group-hover:border-background-400 rounded pl-1 pr-2">
          <Thumbnail
            icon={networkIcon}
            size="xs"
            className="text-foreground-200 p-0 group-hover:bg-background-300"
            rounded
          />
          {network}
        </div>
      )}
    </div>
  );
};
