import React from "react";
import { Button, Input, Box, Page, useSnackbar } from "zmp-ui";
import { useRecoilState } from "recoil";
import { displayNameState } from "state";
import { useNavigate } from "react-router";

const FormPage: React.FunctionComponent = () => {
  const [displayName, setDisplayName] = useRecoilState(displayNameState);
  const snackbar = useSnackbar();
  const navigate = useNavigate();

  const handleSubmit = () => {
    snackbar.openSnackbar({
      duration: 3000,
      text: "Display name updated!",
      type: "success",
    });
    navigate(-1);
  };

  return (
    <Page className="page">
      <div className="section-container">
        <Box>
          <Input
            label="Display Name"
            type="text"
            placeholder={displayName}
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <Box mt={4}>
            <Button fullWidth variant="secondary" onClick={handleSubmit}>
              Back
            </Button>
          </Box>
        </Box>
      </div>
    </Page>
  );
};

export default FormPage;
