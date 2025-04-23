import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main Pages
import Home from "../pages/Home";
import GettingStarted from "../pages/GettingStarted";
import Themes from "../pages/Themes";

// Tokens
import ColorsToken from "../pages/Tokens/Colors";
import SpacingToken from "../pages/Tokens/Spacing";
import TypographyToken from "../pages/Tokens/Typography";
import ShadowsToken from "../pages/Tokens/Shadows";
import RadiusToken from "../pages/Tokens/Radius";
import ZIndexToken from "../pages/Tokens/ZIndex";
import FontsToken from "../pages/Tokens/Fonts";
import BreakpointsToken from "../pages/Tokens/Breakpoints";

// Utilities
import TextUtils from "../pages/Utilities/Text";
import FlexUtils from "../pages/Utilities/Flex";
import GridUtils from "../pages/Utilities/Grid";
import SizingUtils from "../pages/Utilities/Sizing";
import SpacingUtils from "../pages/Utilities/Spacing";
import EffectsUtils from "../pages/Utilities/Effects";
import ColorsUtils from "../pages/Utilities/Colors";
import BackgroundUtils from "../pages/Utilities/Background";
import DisplayUtils from "../pages/Utilities/Display";
import PositionUtils from "../pages/Utilities/Position";
import BorderUtils from "../pages/Utilities/Border";

// Components
import ButtonComponent from "../pages/Components/Button";
import CardComponent from "../pages/Components/Card";
import ModalComponent from "../pages/Components/Modal";
import FormComponent from "../pages/Components/Form";
import NavbarComponent from "../pages/Components/Navbar";
import TooltipComponent from "../pages/Components/Tooltip";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* General */}
        <Route path="/" element={<Home />} />
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/themes" element={<Themes />} />

        {/* Tokens */}
        <Route path="/tokens/colors" element={<ColorsToken />} />
        <Route path="/tokens/spacing" element={<SpacingToken />} />
        <Route path="/tokens/typography" element={<TypographyToken />} />
        <Route path="/tokens/shadows" element={<ShadowsToken />} />
        <Route path="/tokens/radius" element={<RadiusToken />} />
        <Route path="/tokens/zindex" element={<ZIndexToken />} />
        <Route path="/tokens/fonts" element={<FontsToken />} />
        <Route path="/tokens/breakpoints" element={<BreakpointsToken />} />

        {/* Utilities */}
        <Route path="/utilities/text" element={<TextUtils />} />
        <Route path="/utilities/flex" element={<FlexUtils />} />
        <Route path="/utilities/grid" element={<GridUtils />} />
        <Route path="/utilities/sizing" element={<SizingUtils />} />
        <Route path="/utilities/spacing" element={<SpacingUtils />} />
        <Route path="/utilities/effects" element={<EffectsUtils />} />
        <Route path="/utilities/colors" element={<ColorsUtils />} />
        <Route path="/utilities/background" element={<BackgroundUtils />} />
        <Route path="/utilities/display" element={<DisplayUtils />} />
        <Route path="/utilities/position" element={<PositionUtils />} />
        <Route path="/utilities/border" element={<BorderUtils />} />

        {/* Components */}
        <Route path="/components/button" element={<ButtonComponent />} />
        <Route path="/components/card" element={<CardComponent />} />
        <Route path="/components/modal" element={<ModalComponent />} />
        <Route path="/components/form" element={<FormComponent />} />
        <Route path="/components/navbar" element={<NavbarComponent />} />
        <Route path="/components/tooltip" element={<TooltipComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
