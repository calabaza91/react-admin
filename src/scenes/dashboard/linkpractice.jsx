// Creating the code to use box as a link to respective scenes
import { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../themes";
import Link from "@mui/material";
import StatBox from "../../components/StatBox";

const DashboardItem = ({ to, title, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      active={selected === title}
      style={{
        color: colors.grey[100],
        backgroundColor: colors.primary[400],
      }}
      onClick={() => setSelected(title)}
    >
      <Link to={to} />
    </Box>
  );
};

const Dash = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <DashboardItem
      style={{
        margin: "10px 0 20px 0",
        color: colors.grey[100],
      }}
    >
      {/* MENU ITEM */}
      <DashboardItem
        title="Dashboard"
        to="/invoices"
        selected={selected}
        setSelected={setSelected}
      />

      {/* STATBOX */}
      <Box
        gridColumn="span 3"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Link to={"/invoices"}>
          <StatBox
            title="12,361"
            subtitle="Sales Obtained"
            progress="0.75"
            increase="+14%"
          />
        </Link>
      </Box>
    </DashboardItem>
  );
};

export default Dash;
