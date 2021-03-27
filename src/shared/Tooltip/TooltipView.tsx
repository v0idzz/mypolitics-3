import React, { useState } from "react";
import { TooltipContainer, TooltipArrow } from "./TooltipStyles";
import { CSSTransition } from "react-transition-group";
import * as R from "ramda";
import { useTheme } from "styled-components";
import { usePopper } from "react-popper";

type TooltipVariant = "success" | "error" | "info";

interface Props {
  children: React.ReactElement;
  text?: string;
  variant?: TooltipVariant;
  show?: boolean;
}

const Tooltip: React.FC<Props> = ({
  children,
  text,
  variant = "info",
  show,
}) => {
  const [referenceElement, setReferenceElement] = useState<HTMLElement>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement>(null);
  const [arrowElement, setArrowElement] = useState<HTMLDivElement>(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      { name: "arrow", options: { element: arrowElement } },
      {
        name: "offset",
        options: {
          offset: [0, 8],
        },
      },
    ],
    placement: "top",
  });

  const theme = useTheme();

  const color = R.cond([
    [R.equals("success"), R.always(theme.colors.green)],
    [R.equals("error"), R.always(theme.colors.red)],
    [R.equals("info"), R.always(theme.colors.primary)],
  ])(variant);

  return (
    <>
      <CSSTransition classNames="fade" in={show} timeout={200} unmountOnExit>
        <TooltipContainer
          ref={setPopperElement}
          color={color}
          style={styles.popper}
          {...attributes.popper}
        >
          {text}
          <TooltipArrow ref={setArrowElement} style={styles.arrow} />
        </TooltipContainer>
      </CSSTransition>
      {React.cloneElement(children, {
        ...children.props,
        ref: setReferenceElement,
      })}
    </>
  );
};

export default Tooltip;
