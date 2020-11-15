import "typeface-inter";
import "typeface-jost";

export enum BrandColor {
    Primary = "#1DBBFF",
    // Secondary = "#000000",
    Tertiary = "#999999",
  }
  
  export class Color {
    public static readonly Primary = BrandColor.Primary;
    public static readonly Secondary = BrandColor.Primary;
    public static readonly Tertiary = BrandColor.Tertiary;
  
    public static readonly Black = "#0C2634";
    public static readonly White = "#FFFFFF";
    public static readonly Transparent = "transparent";
  
    public static readonly GrayXDark = "#222";
    public static readonly GrayDark = "#555";
    public static readonly Gray = "#F9F9F9";

    public static readonly Background = "#FFFDFB";

  }
  
  export enum Spacing {
    XSmall = "4px",
    Small = "12px",
    Medium = "16px",
    Large = "24px",
    XLarge = "40px",
    XXLarge = "120px",
  }

  export enum ProportionalSpacing {
    XSmall = "2%",
    Small = "5%",
    Medium = "10%",
    Large = "25%",
    XLarge = "40%",
    XXLarge = "50%",
  }
  
  export enum FontFamily {
    Primary = "Inter",
    Secondary = "Jost",
  }
  
  export enum FontWeight {
    Medium = 600,
    Bold = "bold",
    Regular = "Regular",
    Lighter = 300,
  }

  export enum LineHeight {
    XSmall = "1rem",
    Small = "1.2rem",
    Medium = "1.4rem",
    Large = "4rem",
    XLarge = "6rem",
  }
  
  export enum FontSize {
    XSmall = "1rem",
    Small = "1.2rem",
    Medium = "1.5rem",
    Large = "3rem",
    XLarge = "6rem",
  }
  
  export enum Radius {
    XSmall = "8px",
    Small = "10px",
    Large = "20px",
  }
  
  export enum Breakpoint {
    Mobile = "600px",
    Tablet = "768px",
    Desktop = "1060px",
    LargeDesktop = "1024px",
  }
  
  export enum Transition {
    Fast = "0.3s",
    Slow = "1s",
  }
  
 
  export enum FlashMessageType {
    ERROR = "error",
    WARNING = "warning",
    SUCCESS = "success",
  }
  
  
  