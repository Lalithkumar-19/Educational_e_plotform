import {
  init_base
} from "./chunk-TVP2VOH6.js";
import {
  clsx_m_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  init_clsx_m,
  init_esm,
  init_generateUtilityClass,
  init_styled,
  init_useThemeProps,
  require_jsx_runtime,
  require_prop_types,
  styled_default,
  useThemeProps2 as useThemeProps
} from "./chunk-WNCGE2RT.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  init_extends,
  init_objectWithoutPropertiesLoose
} from "./chunk-BCMXMLPH.js";
import {
  require_react
} from "./chunk-FLAVOKRJ.js";
import {
  __toESM
} from "./chunk-AC2VUBZ6.js";

// node_modules/@mui/material/AccordionDetails/AccordionDetails.js
init_extends();
init_objectWithoutPropertiesLoose();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_clsx_m();
init_base();
init_styled();
init_useThemeProps();

// node_modules/@mui/material/AccordionDetails/accordionDetailsClasses.js
init_esm();
init_generateUtilityClass();
function getAccordionDetailsUtilityClass(slot) {
  return generateUtilityClass("MuiAccordionDetails", slot);
}
var accordionDetailsClasses = generateUtilityClasses("MuiAccordionDetails", ["root"]);
var accordionDetailsClasses_default = accordionDetailsClasses;

// node_modules/@mui/material/AccordionDetails/AccordionDetails.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["className"];
var useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getAccordionDetailsUtilityClass, classes);
};
var AccordionDetailsRoot = styled_default("div", {
  name: "MuiAccordionDetails",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  padding: theme.spacing(1, 2, 2)
}));
var AccordionDetails = React.forwardRef(function AccordionDetails2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiAccordionDetails"
  });
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  return (0, import_jsx_runtime.jsx)(AccordionDetailsRoot, _extends({
    className: clsx_m_default(classes.root, className),
    ref,
    ownerState
  }, other));
});
true ? AccordionDetails.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var AccordionDetails_default = AccordionDetails;

export {
  getAccordionDetailsUtilityClass,
  accordionDetailsClasses_default,
  AccordionDetails_default
};
//# sourceMappingURL=chunk-ITBU6BST.js.map
