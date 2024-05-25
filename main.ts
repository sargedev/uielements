
namespace UI {

    enum Color {
        Transparent,
        White,
        Red,
        Pink,
        Orange,
        Yellow,
        Cyan,
        Green,
        Blue,
        LightBlue,
        Magenta,
        LightPurple,
        Purple,
        Tan,
        Brown,
        Black
    }

    class Style {
        private _backgroundColor?: Color;
        private _foregroundColor?: Color;
        private _padding?: number;
        element: Element;

        constructor(element?: Element) {
            this.element = element;
        }

        get backgroundColor(): Color {
            return this._backgroundColor;
        }

        set backgroundColor(value: Color) {
            this._backgroundColor = value;
        }

        get padding(): number {
            return this._padding;
        }

        set padding(value: number) {
            this._padding = value;
        }
    }

    interface Attributes {
        id?: string;
        class?: string;
        style?: Style;
    }

    class Element {
        parent: Element | null;
        attributes: Attributes;
        private sprite: Sprite;
        
        constructor(attributes?: Attributes, parent: Element=null) {
            this.attributes = attributes || { style: new Style(this) };
            this.parent = parent;
        }
    }
}