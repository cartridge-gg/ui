import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";

export interface CollectibleTagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof collectibleTagVariants> {
  label?: string;
  hover?: boolean;
}

const collectibleTagVariants = cva(
  "relative px-1 py-0.5 rounded-[4px] h-6 flex justify-center items-center text-sm tracking-wider font-normal select-none",
  {
    variants: {
      variant: {
        default: "text-foreground-100 bg-translucent-light-100",
        dark: "text-foreground-100 bg-translucent-dark-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export function CollectibleTag({
  label,
  variant,
  className,
  children,
  ...props
}: CollectibleTagProps) {
  return (
    <div
      className={cn(collectibleTagVariants({ variant }), className)}
      {...props}
    >
      {children}
      {label && <p className="px-0.5">{label}</p>}
    </div>
  );
}

export function CollectibleTagFlex({
  variant,
  className,
  children,
  ...props
}: Omit<CollectibleTagProps, "label">) {
  return (
    <div
      className={cn(collectibleTagVariants({ variant }), className)}
      {...props}
    >
      <div className="flex gap-1 items-center">{children}</div>
    </div>
  );
}

export default CollectibleTag;
