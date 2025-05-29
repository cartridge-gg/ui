import React from 'react';
import { View, Text } from 'react-native';
import { Meta, StoryObj } from '@storybook/react-native';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from './sheet';
import { Button } from '../button';

const meta: Meta<typeof Sheet> = {
  title: 'Primitives/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <View style={{ padding: 20, minWidth: 300, minHeight: 200 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger>
        <Button>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};

export const FromLeft: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger>
        <Button>Open from Left</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation Menu</SheetTitle>
          <SheetDescription>
            This sheet slides in from the left side of the screen.
          </SheetDescription>
        </SheetHeader>
        <View style={{ marginTop: 20 }}>
          <Text style={{ marginBottom: 10 }}>Menu Item 1</Text>
          <Text style={{ marginBottom: 10 }}>Menu Item 2</Text>
          <Text style={{ marginBottom: 10 }}>Menu Item 3</Text>
        </View>
      </SheetContent>
    </Sheet>
  ),
};

export const FromTop: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger>
        <Button>Open from Top</Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Notification</SheetTitle>
          <SheetDescription>
            This sheet slides down from the top of the screen.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};

export const FromBottom: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger>
        <Button>Open from Bottom</Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Bottom Sheet</SheetTitle>
          <SheetDescription>
            This is a bottom sheet, commonly used in mobile apps.
          </SheetDescription>
        </SheetHeader>
        <View style={{ marginTop: 20 }}>
          <Button variant="outline" style={{ marginBottom: 10 }}>
            Action 1
          </Button>
          <Button variant="outline" style={{ marginBottom: 10 }}>
            Action 2
          </Button>
        </View>
      </SheetContent>
    </Sheet>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger>
        <Button>Open with Footer</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Confirm Action</SheetTitle>
          <SheetDescription>
            Please confirm that you want to proceed with this action.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button>Confirm</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const NoCloseButton: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger>
        <Button>Open without Close</Button>
      </SheetTrigger>
      <SheetContent showClose={false}>
        <SheetHeader>
          <SheetTitle>No Close Button</SheetTitle>
          <SheetDescription>
            This sheet doesn't have a close button in the corner.
          </SheetDescription>
        </SheetHeader>
        <View style={{ marginTop: 20 }}>
          <SheetClose>
            <Button>Close Sheet</Button>
          </SheetClose>
        </View>
      </SheetContent>
    </Sheet>
  ),
};

export const ControlledSheet: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
      <View>
        <Button onPress={() => setIsOpen(true)}>
          Open Controlled Sheet
        </Button>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Controlled Sheet</SheetTitle>
              <SheetDescription>
                This sheet's open state is controlled externally.
              </SheetDescription>
            </SheetHeader>
            <View style={{ marginTop: 20 }}>
              <Button onPress={() => setIsOpen(false)}>
                Close Programmatically
              </Button>
            </View>
          </SheetContent>
        </Sheet>
      </View>
    );
  },
};

export const LongContent: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger>
        <Button>Open with Long Content</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Long Content Sheet</SheetTitle>
          <SheetDescription>
            This sheet contains a lot of content to test scrolling.
          </SheetDescription>
        </SheetHeader>
        <View style={{ marginTop: 20 }}>
          {Array.from({ length: 20 }, (_, i) => (
            <Text key={i} style={{ marginBottom: 10 }}>
              Content item {i + 1}: Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </Text>
          ))}
        </View>
      </SheetContent>
    </Sheet>
  ),
};