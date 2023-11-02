import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import tableCellClasses from "@mui/material/TableCell";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, difficulty, solution) {
  return { name, difficulty, solution };
}

const rows = [
  createData("1. Two Sum", "Easy", "Y"),
  createData("2. Add Two Numbers", "Difficult", "Y"),
  createData("3. Median of Two Sorted Arrays", "Easy", "N"),
  createData("4. Longest Palindromic Substring", "Easy", "Y"),
  createData("5. Zigzag Conversion", "Difficult", "N"),
  createData("6. Reverse Integer", "Difficult", "N"),
  createData("7. String to Integer (atoi)", "Hard", "Y"),
  createData("8. Palindrome Number", "Difficult", "Y"),
  createData("9. Regular Expression Matching", "Easy", "N"),
  createData("10. Container With Most Water", "Hard", "N"),
  createData("11. Integer to Roman", "Easy", "Y"),
  createData("12. Roman to Integer", "Difficult", "Y"),
  createData("13. Longest Common Prefix", "Easy", "Y"),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export const Problems = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell className="text-white " component="th" scope="row">
              Status
            </TableCell>
            <TableCell className="text-white" component="th" scope="row">
              Title
            </TableCell>
            <TableCell className="text-white" component="th" scope="row">
              Difficulty
            </TableCell>
            <TableCell className="text-white" component="th" scope="row">
              Solution
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell className="text-white" component="th" scope="row">
                {<CheckCircleOutlineIcon style={{ color: "green" }} />}
              </TableCell>
              <TableCell className="text-white" component="th" scope="row">
                <p className="hover:text-blue-400 hover:cursor-pointer">
                  {row.name}
                </p>
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.difficulty == "Easy" ? (
                  <p style={{ color: "#00Af9B" }}>Easy</p>
                ) : row.difficulty == "Difficult" ? (
                  <p style={{ color: "#FFB800" }}>Difficult</p>
                ) : (
                  <p style={{ color: "#FF2D55" }}>Hard</p>
                )}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.solution}
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
