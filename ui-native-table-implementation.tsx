import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { colors } from '../theme/colors';

// Table context for managing table state
interface TableContextValue {
  selectedRows?: Set<string>;
  onRowSelect?: (rowId: string) => void;
}

const TableContext = React.createContext<TableContextValue>({});

// Main Table component
interface TableProps {
  children: React.ReactNode;
  style?: ViewStyle;
  selectedRows?: Set<string>;
  onRowSelect?: (rowId: string) => void;
}

const Table = React.forwardRef<ScrollView, TableProps>(
  ({ children, style, selectedRows, onRowSelect, ...props }, ref) => {
    return (
      <TableContext.Provider value={{ selectedRows, onRowSelect }}>
        <View style={[{ position: 'relative', width: '100%' }, style]}>
          <ScrollView
            ref={ref}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ width: '100%' }}
            {...props}
          >
            <View style={{ minWidth: '100%' }}>
              {children}
            </View>
          </ScrollView>
        </View>
      </TableContext.Provider>
    );
  }
);

Table.displayName = 'Table';

// Table Header component
interface TableHeaderProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const TableHeader: React.FC<TableHeaderProps> = ({ children, style }) => {
  return (
    <View style={style}>
      {children}
    </View>
  );
};

TableHeader.displayName = 'TableHeader';

// Table Body component
interface TableBodyProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const TableBody: React.FC<TableBodyProps> = ({ children, style }) => {
  return (
    <View style={style}>
      {children}
    </View>
  );
};

TableBody.displayName = 'TableBody';

// Table Footer component
interface TableFooterProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const TableFooter: React.FC<TableFooterProps> = ({ children, style }) => {
  return (
    <View
      style={[
        {
          borderTopWidth: 1,
          borderTopColor: colors.background[300],
          backgroundColor: colors.background[100],
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

TableFooter.displayName = 'TableFooter';

// Table Row component
interface TableRowProps {
  children: React.ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
  selected?: boolean;
  rowId?: string;
}

const TableRow: React.FC<TableRowProps> = ({
  children,
  style,
  onPress,
  selected,
  rowId,
}) => {
  const { selectedRows, onRowSelect } = React.useContext(TableContext);
  const isSelected = selected || (rowId && selectedRows?.has(rowId));

  const handlePress = () => {
    if (onPress) {
      onPress();
    }
    if (rowId && onRowSelect) {
      onRowSelect(rowId);
    }
  };

  const rowStyle: ViewStyle = {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.background[300],
    backgroundColor: isSelected ? colors.background[200] : 'transparent',
  };

  if (onPress || onRowSelect) {
    return (
      <TouchableOpacity
        style={[rowStyle, style]}
        onPress={handlePress}
        activeOpacity={0.7}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <View style={[rowStyle, style]}>
      {children}
    </View>
  );
};

TableRow.displayName = 'TableRow';

// Table Head component
interface TableHeadProps {
  children: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
  width?: number | string;
  flex?: number;
}

const TableHead: React.FC<TableHeadProps> = ({
  children,
  style,
  textStyle,
  width,
  flex = 1,
}) => {
  const cellStyle: ViewStyle = {
    height: 40,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'flex-start',
  };

  if (width) {
    cellStyle.width = typeof width === 'string' ? undefined : width;
    cellStyle.flex = undefined;
  } else {
    cellStyle.flex = flex;
  }

  const defaultTextStyle: TextStyle = {
    fontWeight: '500',
    color: colors.foreground[400],
    fontSize: 14,
  };

  return (
    <View style={[cellStyle, style]}>
      {typeof children === 'string' ? (
        <Text style={[defaultTextStyle, textStyle]}>{children}</Text>
      ) : (
        children
      )}
    </View>
  );
};

TableHead.displayName = 'TableHead';

// Table Cell component
interface TableCellProps {
  children: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
  width?: number | string;
  flex?: number;
  align?: 'left' | 'center' | 'right';
}

const TableCell: React.FC<TableCellProps> = ({
  children,
  style,
  textStyle,
  width,
  flex = 1,
  align = 'left',
}) => {
  const cellStyle: ViewStyle = {
    paddingHorizontal: 8,
    paddingVertical: 12,
    justifyContent: 'center',
  };

  // Set alignment
  switch (align) {
    case 'center':
      cellStyle.alignItems = 'center';
      break;
    case 'right':
      cellStyle.alignItems = 'flex-end';
      break;
    default:
      cellStyle.alignItems = 'flex-start';
  }

  if (width) {
    cellStyle.width = typeof width === 'string' ? undefined : width;
    cellStyle.flex = undefined;
  } else {
    cellStyle.flex = flex;
  }

  const defaultTextStyle: TextStyle = {
    color: colors.foreground[100],
    fontSize: 14,
  };

  if (align === 'right') {
    defaultTextStyle.textAlign = 'right';
  } else if (align === 'center') {
    defaultTextStyle.textAlign = 'center';
  }

  return (
    <View style={[cellStyle, style]}>
      {typeof children === 'string' ? (
        <Text style={[defaultTextStyle, textStyle]}>{children}</Text>
      ) : (
        children
      )}
    </View>
  );
};

TableCell.displayName = 'TableCell';

// Table Caption component
interface TableCaptionProps {
  children: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const TableCaption: React.FC<TableCaptionProps> = ({
  children,
  style,
  textStyle,
}) => {
  const defaultTextStyle: TextStyle = {
    marginTop: 16,
    fontSize: 14,
    color: colors.foreground[400],
    textAlign: 'center',
  };

  return (
    <View style={style}>
      <Text style={[defaultTextStyle, textStyle]}>{children}</Text>
    </View>
  );
};

TableCaption.displayName = 'TableCaption';

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};