export default class Theme {
  private constructor() {}

  private static instance: Theme;

  private _fontFamily = {
    poppinsLight: "Poppins-Light",
    poppinsRegular: "Poppins-Regular",
    poppinsMedium: "Poppins-Medium",
    poppinsSemiBold: "Poppins-SemiBold",
  };

  private _fontSize = {
    heading0: 48,
    heading1: 32,
    heading2: 24,
    body0: 18,
    body1: 16,
    body2: 14,
    body3: 12,
  };

  private _fontWeight = {
    semibold: "500" as const,
    medium: "400" as const,
    regular: "300" as const,
    light: "200" as const,
  };

  private _colors = {
    black: "#212121",
    white: "#FFFFFF",
    giratina100: "#F5F5F5",
    giratina200: "#EEEEEE",
    giratina300: "#E0E0E0",
    giratina400: "#BDBDBD",
    giratina500: "#9E9E9E",
    charizard100: "#FFECB3",
    charizard200: "#FFE082",
    charizard300: "#FFD54F",
    charizard400: "#FFCA28",
    charizard500: "#FFC107",
    gengar100: "#C5CAE9",
    gengar200: "#9FA8DA",
    gengar300: "#7986CB",
    gengar400: "#5C6BC0",
    gengar500: "#3F51B5",
    magikarp100: "#FFCDD2",
    magikarp200: "#EF9A9A",
    magikarp300: "#E57373",
    magikarp400: "#EF5350",
    magikarp500: "#F44336",
    venussaur100: "#C8E6C9",
    venussaur200: "#A5D6A7",
    venussaur300: "#81C784",
    venussaur400: "#66BB6A",
    venussaur500: "#4CAF50",
  };

  public static getInstance(): Theme {
    if (!Theme.instance) {
      Theme.instance = new Theme();
    }

    return Theme.instance;
  }

  public getColor(colorName: keyof typeof this._colors): string {
    return this._colors[colorName];
  }

  public getFontFamily(fontName: keyof typeof this._fontFamily): string {
    return this._fontFamily[fontName];
  }

  public getFontSize(sizeName: keyof typeof this._fontSize): number {
    return this._fontSize[sizeName];
  }

  public getFontWeight(
    weightName: keyof typeof this._fontWeight
  ): "200" | "300" | "400" | "500" {
    return this._fontWeight[weightName];
  }
}
