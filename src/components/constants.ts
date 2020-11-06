import "typeface-inter";
import "typeface-jost";

export enum BrandColor {
    Primary = "#1DBBFF",
    Secondary = "#000000",
    Tertiary = "#999999",
    Quaternary = "#92929D",
    White = "#FFFFFF",
  }
  
  export class Color {
    public static readonly Primary = BrandColor.Primary;
    public static readonly Secondary = BrandColor.Secondary;
    public static readonly Tertiary = BrandColor.Tertiary;
    public static readonly Quaternary = BrandColor.Quaternary;
  
    public static readonly Black = "black";
    public static readonly White = "white";
    public static readonly Transparent = "transparent";
  
    public static readonly Gray = "#F9F9F9";
    public static readonly LightGray = "#FAFAFA";
    public static readonly Alert = "#DC2729";
    public static readonly Warning = "#F5A623";
    public static readonly Success = "#1ABC9C";
  }
  
  export enum Spacing {
    XSmall = "4px",
    Small = "12px",
    Medium = "16px",
    Large = "24px",
    XLarge = "40px",
    XXLarge = "72px",
  }
  
  export enum FontFamily {
    Primary = "Inter",
    Secondary = "Jost",
  }
  
  export enum FontWeight {
    Medium = 600,
    Bold = "bold",
    Normal = "Regular",
    Lighter = 300,
  }

  export enum LineHeight {
    XSmall = "1rem",
    Small = "1.4rem",
    Medium = "1.8rem",
    Large = "4.2rem",
  }
  
  export enum FontSize {
    XSmall = "0.8rem",
    Small = "1.2rem",
    Medium = "1.5rem",
    Large = "4rem",
    XLarge = "7rem",
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
  
  
  