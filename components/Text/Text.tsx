import { ColorKey, colors } from '@/constants/colors';
import { BodyFontSizeKey, fontFamily, fontSize, HeadingFontSizeKey } from '@/constants/font';
import { FC, forwardRef } from 'react';
import { Text as RNText, type TextProps as RNTextProps, TextStyle } from 'react-native';


export interface TextDefaultProps extends RNTextProps {
  size?: BodyFontSizeKey;
  weight?: keyof (typeof fontFamily)['FontTBD'];
  color?: ColorKey;
  textAlign?: TextStyle['textAlign'];
}

const TextDefault: FC<TextDefaultProps> = forwardRef<RNText, TextDefaultProps>(
  ({ size = 'base', weight = 'regular', color, textAlign, style, ...props }, ref) => {
    return (
      <RNText
        ref={ref}
        {...props}
        style={[
          {
            ...fontSize.body[size],
            ...fontFamily.FontTBD[weight],
            color: colors[color ?? 'text.primary'],
            textAlign,
          },
          style,
        ]}
      />
    );
  }
);

TextDefault.displayName = 'Text';

export interface TextHeadingProps extends RNTextProps {
  size?: HeadingFontSizeKey;
  weight?: keyof (typeof fontFamily)['FontTBD'];
  color?: ColorKey;
  textAlign?: TextStyle['textAlign'];
}

const TextHeading: FC<TextHeadingProps> = forwardRef<RNText, TextHeadingProps>(
  ({ size = 'md', weight = 'medium', color, textAlign, style, ...props }, ref) => {
    return (
      <RNText
        ref={ref}
        {...props}
        style={[
          {
            ...fontSize.heading[size],
            ...fontFamily.FontTBD[weight],
            color: colors[color ?? 'text.primary'],
            textAlign,
          },
          style,
        ]}
      />
    );
  }
);

TextHeading.displayName = 'TextHeading';

interface TextComponent extends FC<TextDefaultProps> {
  Heading: FC<TextHeadingProps>;
}

export const Text = TextDefault as TextComponent;

Text.Heading = TextHeading;