import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function Media(props) {
  const { loading = false } = props;

  return (
    <Grid item xs={3}> {/* Each grid item should take up 25% of the width */}
      <Skeleton variant="rectangular" width={280} height={250} />
    </Grid>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function TempSkelton() {
  const skeletonCount = 20; // Number of grid skeletons to display

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Grid container spacing={3}> {/* Add spacing between grid items */}
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <Media key={index} loading />
        ))}
      </Grid>
    </Box>
  );
}
