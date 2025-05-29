import React, { useState, useRef, useEffect } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { colors } from '../theme/colors';
import { TimesIcon } from '../icons';

// Types
type SheetSide = 'top' | 'bottom' | 'left' | 'right';

interface SheetContextValue {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  side: SheetSide;
}

// Context for managing sheet state
const SheetContext = React.createContext<SheetContextValue | null>(null);

const useSheet = () => {
  const context = React.useContext(SheetContext);
  if (!context) {
    throw new Error('Sheet components must be used within a Sheet');
  }
  return context;
};

// Root Sheet component
interface SheetProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const Sheet: React.FC<SheetProps> = ({
  children,
  defaultOpen = false,
  open,
  onOpenChange,
}) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  const setIsOpen = (newOpen: boolean) => {
    if (!isControlled) {
      setInternalOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };

  return (
    <SheetContext.Provider value={{ isOpen, setIsOpen, side: 'right' }}>
      {children}
    </SheetContext.Provider>
  );
};

// Sheet Trigger component
interface SheetTriggerProps {
  children: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const SheetTrigger: React.FC<SheetTriggerProps> = ({
  children,
  style,
  textStyle,
}) => {
  const { setIsOpen } = useSheet();

  return (
    <TouchableOpacity
      style={style}
      onPress={() => setIsOpen(true)}
      activeOpacity={0.7}
    >
      {typeof children === 'string' ? (
        <Text style={textStyle}>{children}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

// Sheet Overlay component
const SheetOverlay: React.FC = () => {
  const { isOpen, setIsOpen } = useSheet();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: isOpen ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isOpen, fadeAnim]);

  return (
    <Animated.View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        opacity: fadeAnim,
      }}
      pointerEvents={isOpen ? 'auto' : 'none'}
    >
      <TouchableWithoutFeedback onPress={() => setIsOpen(false)}>
        <View style={{ flex: 1 }} />
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

// Sheet Content component
interface SheetContentProps {
  children: React.ReactNode;
  side?: SheetSide;
  showClose?: boolean;
  style?: ViewStyle;
}

const SheetContent: React.FC<SheetContentProps> = ({
  children,
  side = 'right',
  showClose = true,
  style,
}) => {
  const { isOpen, setIsOpen } = useSheet();
  const slideAnim = useRef(new Animated.Value(0)).current;
  const { width, height } = Dimensions.get('window');

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isOpen ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isOpen, slideAnim]);

  const getTransform = () => {
    switch (side) {
      case 'top':
        return [
          {
            translateY: slideAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [-height, 0],
            }),
          },
        ];
      case 'bottom':
        return [
          {
            translateY: slideAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [height, 0],
            }),
          },
        ];
      case 'left':
        return [
          {
            translateX: slideAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [-width * 0.75, 0],
            }),
          },
        ];
      case 'right':
        return [
          {
            translateX: slideAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [width * 0.75, 0],
            }),
          },
        ];
      default:
        return [];
    }
  };

  const getContentStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      position: 'absolute',
      backgroundColor: colors.background,
      padding: 24,
      gap: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 8,
      elevation: 8,
    };

    switch (side) {
      case 'top':
        return {
          ...baseStyle,
          top: 0,
          left: 0,
          right: 0,
          borderBottomWidth: 1,
          borderBottomColor: colors.background[300],
        };
      case 'bottom':
        return {
          ...baseStyle,
          bottom: 0,
          left: 0,
          right: 0,
          borderTopWidth: 1,
          borderTopColor: colors.background[300],
        };
      case 'left':
        return {
          ...baseStyle,
          top: 0,
          bottom: 0,
          left: 0,
          width: width * 0.75,
          maxWidth: 384, // sm:max-w-sm equivalent
          borderRightWidth: 1,
          borderRightColor: colors.background[300],
        };
      case 'right':
        return {
          ...baseStyle,
          top: 0,
          bottom: 0,
          right: 0,
          width: width * 0.75,
          maxWidth: 384, // sm:max-w-sm equivalent
          borderLeftWidth: 1,
          borderLeftColor: colors.background[300],
        };
      default:
        return baseStyle;
    }
  };

  return (
    <Modal
      visible={isOpen}
      transparent
      animationType="none"
      onRequestClose={() => setIsOpen(false)}
    >
      <View style={{ flex: 1 }}>
        <SheetOverlay />
        <Animated.View
          style={[
            getContentStyle(),
            { transform: getTransform() },
            style,
          ]}
        >
          {children}
          {showClose && (
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: 16,
                top: 16,
                padding: 4,
                borderRadius: 4,
                opacity: 0.7,
              }}
              onPress={() => setIsOpen(false)}
              activeOpacity={0.7}
            >
              <TimesIcon size="xs" color={colors.foreground[100]} />
            </TouchableOpacity>
          )}
        </Animated.View>
      </View>
    </Modal>
  );
};

// Sheet Header component
interface SheetHeaderProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const SheetHeader: React.FC<SheetHeaderProps> = ({ children, style }) => {
  return (
    <View
      style={[
        {
          flexDirection: 'column',
          gap: 8,
          alignItems: 'center',
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

// Sheet Footer component
interface SheetFooterProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const SheetFooter: React.FC<SheetFooterProps> = ({ children, style }) => {
  return (
    <View
      style={[
        {
          flexDirection: 'column-reverse',
          gap: 8,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

// Sheet Title component
interface SheetTitleProps {
  children: React.ReactNode;
  style?: TextStyle;
}

const SheetTitle: React.FC<SheetTitleProps> = ({ children, style }) => {
  return (
    <Text
      style={[
        {
          fontSize: 18,
          fontWeight: '600',
          color: colors.foreground,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

// Sheet Description component
interface SheetDescriptionProps {
  children: React.ReactNode;
  style?: TextStyle;
}

const SheetDescription: React.FC<SheetDescriptionProps> = ({
  children,
  style,
}) => {
  return (
    <Text
      style={[
        {
          fontSize: 14,
          color: colors.foreground[400],
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

// Sheet Close component
interface SheetCloseProps {
  children: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const SheetClose: React.FC<SheetCloseProps> = ({
  children,
  style,
  textStyle,
}) => {
  const { setIsOpen } = useSheet();

  return (
    <TouchableOpacity
      style={style}
      onPress={() => setIsOpen(false)}
      activeOpacity={0.7}
    >
      {typeof children === 'string' ? (
        <Text style={textStyle}>{children}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

export {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetOverlay,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
};