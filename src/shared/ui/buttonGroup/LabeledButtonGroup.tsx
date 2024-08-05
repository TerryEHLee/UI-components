import { ButtonGroup, Stack } from "@mui/material";
import { ButtonGroupOptionData } from "@/shared/ui/buttonGroup";
import { ContainedButton } from "@/shared/ui/button";
import { LabeledButtonGroupProps } from "@/shared/ui/buttonGroup";

export const LabeledButtonGroup = ({
  moduleName,
  size = "medium",
  spacing = 1,
  ...props
}: LabeledButtonGroupProps) => {
  const moduleOption = ButtonGroupOptionData.find(
    (option) => option.moduleName === moduleName
  );
  const moduleValue = moduleOption ? moduleOption.value : [];

  return (
    <Stack direction='row' spacing={spacing} {...props}>
      {moduleValue.map((option, index) => (
        <ButtonGroup key={index} {...props}>
          <ContainedButton {...props} size={size}>
            {option}
          </ContainedButton>
        </ButtonGroup>
      ))}
    </Stack>
  );
};
