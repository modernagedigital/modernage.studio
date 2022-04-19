import { styled, keyframes } from "styles/stitches.config";
import tw from "twin.macro";

const StyledCode = styled("div", {
    // ...tw`space-y-[1em]`,
    // height: 300,
    "--code-green": "#3AD900",
    "--code-lightgreen": "#A5FF90",
    "--code-yellow": "#FFEE80",
    "--code-orange": "#DC8D0B",
    "--code-blue": "#9EFFFF",
    userSelect: "none",
    fontFamily: "courier",
    fontSize: 15,
    lineHeight: "24px",
    whiteSpace: "nowrap",
    width: "100%",
    // maxWidth: 480,
    height: 180,
    transform: "rotate(-1deg) scale(0.9)",
    "@sm": {
        height: 380,
    },
    "@md": {
        height: 404,
        transform: "rotate(-1deg)",
        maxWidth: "100%",
    },
    color: "white",
    position: "relative",
    background: "#0B2A4E",
    borderRadius: 8,
    overflow: "hidden",
    zIndex: 0,
    // overflowY: "scroll",

    ".code-green": {
        color: "var(--code-green)",
    },

    ".value-row": {
        position: "relative",

        "&::before": {
            ...tw`content block absolute`,
            width: 23,
            height: 2,
            left: "-30px",
            top: "50%",
            backgroundImage:
                "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAECAQAAABbh8XsAAAAO0lEQVR42mPYI3zU4KDuHmEGLIBiuYO6h40PGx81wKaIYrmjBiDGQV1siiiWOyl8UPeowX4RbIoolQMApN46xWXHnjoAAAAASUVORK5CYII=')",
            backgroundSize: "100%",
        },
    },

    ".code-lightgreen": {
        color: "var(--code-lightgreen)",
    },

    ".code-yellow": {
        color: "var(--code-yellow)",
    },
    ".code-orange": {
        color: "var(--code-orange)",
    },
    ".code-blue": {
        color: "var(--code-blue)",
    },

    ".value": {
        marginLeft: 32,
    },
});

const StyledSidebar = styled("div", {
    ...tw`absolute left-0 top-0 width[40px] flex flex-col items-center padding-top[16px]`,
    div: {
        opacity: 0.4,
    },
});

const CodeSlide = keyframes({
    "0%": {
        transform: "translateY(0)",
    },
    "10%": {
        transform: "translateY(0)",
    },
    "70%": {
        transform: "translateY(-50%)",
    },
    "80%": {
        transform: "translateY(-50%)",
    },
    "100%": {
        transform: "translateY(0)",
    },
});

const StyledScroll = styled("div", {
    paddingTop: 16,
    paddingLeft: 56,
    // transform: "translateY(-50%)",
    animation: `${CodeSlide} 8000ms ease`,
    animationIterationCount: "infinite",
    opacity: 0.75,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
});

const Sidebar = () => {
    return (
        <StyledSidebar>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
            <div>13</div>
            <div>14</div>
            <div>15</div>
            <div>16</div>
            <div>17</div>
            <div>18</div>
            <div>19</div>
            <div>20</div>
            <div>21</div>
            <div>22</div>
            <div>23</div>
            <div>24</div>
            <div>25</div>
            <div>26</div>
            <div>27</div>
            <div>28</div>
            <div>29</div>
            <div>30</div>
            <div>31</div>
        </StyledSidebar>
    );
};

const StyledCodeBlock = styled("div", {});

const LeftBrace = () => <>&#123;</>;
const RightBrace = () => <>&#125;</>;

export const CodeGraphic = () => {
    return (
        <StyledCode>
            <StyledScroll>
                <Sidebar />
                <StyledCodeBlock>
                    <div className="selector">
                        <span className="code-green">.site-wrapper</span>{" "}
                        <LeftBrace />
                    </div>
                    <div className="value">
                        <div className="value-row">
                            <span className="code-lightgreen">background</span>:
                            #<span className="code-yellow">000</span>;
                        </div>
                    </div>
                    <RightBrace />
                </StyledCodeBlock>
                <br />
                <StyledCodeBlock>
                    <div className="selector">
                        <span className="code-green">.button--large</span>{" "}
                        <LeftBrace />
                    </div>
                    <div className="value">
                        <div className="value-row">
                            <span className="code-lightgreen">height</span>:{" "}
                            <span className="code-yellow">3</span>
                            <span className="code-orange">rem</span>;
                        </div>
                        <div className="value-row">
                            <span className="code-lightgreen">width</span>:{" "}
                            <span className="code-yellow">fit-content</span>;
                        </div>
                    </div>
                    <RightBrace />
                </StyledCodeBlock>
                <br />
                <StyledCodeBlock>
                    <div className="selector">
                        <span className="code-green">.header__logo</span>{" "}
                        <LeftBrace />
                    </div>
                    <div className="value">
                        <div className="value-row">
                            <span className="code-lightgreen">width</span>:{" "}
                            <span className="code-yellow">1.5</span>
                            <span className="code-orange">rem</span>;
                        </div>
                        <div className="value-row">
                            <span className="code-lightgreen">height</span>:{" "}
                            <span className="code-yellow">1.5</span>
                            <span className="code-orange">rem</span>;
                        </div>
                        <div className="value-row">
                            <span className="code-lightgreen">display</span>:{" "}
                            <span className="code-yellow">inline-block</span>;
                        </div>
                    </div>
                    <RightBrace />
                </StyledCodeBlock>
                <br />
                <StyledCodeBlock>
                    <div className="selector">
                        <span className="code-green">
                            <span className="code-blue">svg</span>.icon__hero
                        </span>{" "}
                        <LeftBrace />
                    </div>
                    <div className="value">
                        <div className="value-row">
                            <span className="code-lightgreen">animation</span>:{" "}
                            <span className="code-blue">slideIn</span>{" "}
                            <span className="code-yellow">
                                600<span className="code-orange">ms</span> ease
                            </span>
                            ;
                        </div>
                        <div className="value-row">
                            <span className="code-lightgreen">width</span>:{" "}
                            <span className="code-yellow">fit-content</span>;
                        </div>
                    </div>
                    <RightBrace />
                </StyledCodeBlock>
                <br />
                <StyledCodeBlock>
                    <div className="selector">
                        @<span className="code-orange">keyframes</span>{" "}
                        <span className="code-blue">slideIn</span> <LeftBrace />
                    </div>
                    <div className="value">
                        <div className="value-row">
                            <span className="code-green">from</span>{" "}
                            <LeftBrace />{" "}
                            <span className="code-lightgreen">width</span>:{" "}
                            <span className="code-yellow">0</span>{" "}
                            <RightBrace />
                        </div>
                        <div className="value-row">
                            <span className="code-green">to</span> <LeftBrace />{" "}
                            <span className="code-lightgreen">width</span>:{" "}
                            <span className="code-yellow">
                                100<span className="code-orange">%</span>
                            </span>{" "}
                            <RightBrace />
                        </div>
                    </div>
                    <RightBrace />
                </StyledCodeBlock>
                <br />
                <StyledCodeBlock>
                    <div className="selector">
                        <span className="code-green">.content-area</span>{" "}
                        <LeftBrace />
                    </div>
                    <div className="value">
                        <div className="value-row">
                            <span className="code-lightgreen">font-size</span>:{" "}
                            <span className="code-yellow">
                                1.2<span className="code-orange">rem</span>
                            </span>
                            ;
                        </div>
                        <div className="value-row">
                            <span className="code-lightgreen">padding</span>:{" "}
                            <span className="code-blue">
                                <span className="code-orange">var</span>
                                (--side-padding)
                            </span>
                            ;
                        </div>
                        <div className="value-row">
                            <span className="code-lightgreen">height</span>:{" "}
                            <span className="code-yellow">
                                <span className="code-orange">calc</span>(300
                                <span className="code-orange">px</span>, 80
                                <span className="code-orange">vh</span>, 860
                                <span className="code-orange">px</span>)
                            </span>
                            ;
                        </div>
                        <div className="value-row">
                            <span className="code-lightgreen">display</span>:{" "}
                            <span className="code-yellow">grid</span>;
                        </div>
                    </div>
                    <RightBrace />
                </StyledCodeBlock>
                <br />
            </StyledScroll>
        </StyledCode>
    );
};
