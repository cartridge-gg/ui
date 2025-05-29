import React, { useState, useRef, useImperativeHandle, useEffect } from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  TextInputProps,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { colors } from '../theme/colors';
import { TimesCircleIcon, AlertIcon, SpinnerIcon } from '../icons';

// Variant and size types
type TextareaVariant = 'default' | 'username';
type TextareaSize = 'default' | 'lg';

interface TextareaProps extends Omit<TextInputProps, 'style'> {
  variant?: TextareaVariant;
  size?: TextareaSize;
  error?: Error;
  isLoading?: boolean;
  onClear?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

// Clear button component
interface ClearProps {
  isLoading: boolean;
  onClear: () => void;
}

const Clear: React.FC<ClearProps> = ({ isLoading, onClear }) => {
  return (
    <TouchableOpacity
      style={{
        height: 36,
        width: 36,
        padding: 6,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={onClear}
      activeOpacity={0.7}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={colors.foreground[300]} />
      ) : (
        <TimesCircleIcon 
          size="sm" 
          color={colors.foreground[300]}
        />
      )}
    </TouchableOpacity>
  );
};

// Error message component
interface ErrorMessageProps {
  label?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ label }) => {
  if (!label) return null;

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
      }}
    >
      <AlertIcon size="sm" color={colors.destructive[100]} />
      <Text
        style={{
          fontSize: 14,
          lineHeight: 18,
          color: colors.destructive[100],
        }}
      >
        {label}
      </Text>
    </View>
  );
};

// Main Textarea component
const Textarea = React.forwardRef<TextInput, TextareaProps>(
  (
    {
      variant = 'default',
      size = 'default',
      error,
      isLoading = false,
      onClear,
      value,
      style,
      textStyle,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [textHeight, setTextHeight] = useState(40); // Default height
    const internalRef = useRef<TextInput>(null);

    // Forward ref
    useImperativeHandle(ref, () => internalRef.current!);

    // Handle focus state
    const handleFocus = (e: any) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: any) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    // Auto-resize functionality
    const handleContentSizeChange = (event: any) => {
      const { height } = event.nativeEvent.contentSize;
      const minHeight = size === 'lg' ? 48 : 40;
      setTextHeight(Math.max(height, minHeight));
    };

    // Get container styles based on variant and state
    const getContainerStyle = (): ViewStyle => {
      const baseStyle: ViewStyle = {
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 16,
        backgroundColor: colors.background[200],
        borderColor: colors.background[300],
        minHeight: size === 'lg' ? 48 : 40,
        height: textHeight,
      };

      // Variant-specific styles
      if (variant === 'username') {
        // Username variant has same styling as default in this case
      }

      // Focus state
      if (isFocused) {
        baseStyle.borderColor = colors.primary;
        baseStyle.backgroundColor = colors.background[300];
      }

      // Error state
      if (error) {
        baseStyle.borderColor = colors.destructive[100];
      }

      return baseStyle;
    };

    // Get text styles
    const getTextStyle = (): TextStyle => {
      const baseStyle: TextStyle = {
        fontFamily: 'monospace', // React Native equivalent of font-mono
        fontSize: size === 'lg' ? 15 : 14,
        lineHeight: size === 'lg' ? 20 : 18,
        color: colors.foreground[100],
        paddingVertical: size === 'lg' ? 13.3 : 10.3,
        textAlignVertical: 'top', // Important for multiline
      };

      return { ...baseStyle, ...textStyle };
    };

    const showClearButton = isFocused && !!value && !!onClear;

    return (
      <View style={{ gap: 12 }}>
        <View style={{ position: 'relative' }}>
          <TextInput
            ref={internalRef}
            value={value}
            multiline
            textAlignVertical="top"
            style={[
              getContainerStyle(),
              getTextStyle(),
              showClearButton && { paddingRight: 48 }, // Space for clear button
              style,
            ]}
            placeholderTextColor={colors.foreground[400]}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onContentSizeChange={handleContentSizeChange}
            {...props}
          />
          
          {showClearButton && (
            <View
              style={{
                position: 'absolute',
                right: 6,
                top: '50%',
                transform: [{ translateY: -18 }], // Half of clear button height
              }}
            >
              <Clear isLoading={isLoading} onClear={onClear} />
            </View>
          )}
        </View>
        
        {error && <ErrorMessage label={error.message} />}
      </View>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea, type TextareaProps };