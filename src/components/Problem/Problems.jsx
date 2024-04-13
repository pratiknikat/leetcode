import * as React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import { useEffect } from "react";
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
import { apiConnector } from "../../services/apiconnector";
import { problemApi } from "../../services/apis";

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

export const Problems = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [problems, setProblems] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiConnector("GET", problemApi.GET_ALL_PROBLEM);
        const formattedData = transformBackendData(response.data);
        setProblems(formattedData);
      } catch (error) {
        console.error("Error fetching problem details:", error);
      }
    };

    fetchData();
  }, []);

  const transformBackendData = (backendData) => {
    if (!backendData || typeof backendData !== "object") {
      console.error("Error: Backend data is not an object");
      return [];
    }
    const dataArray = backendData.data;
    if (!Array.isArray(dataArray)) {
      console.error("Error: 'data' property is not an array");
      return [];
    }

    return dataArray
      .map((data) => ({
        problemTitle: data.problemTitle,
        level: data.level,
        status: data.status ? "Y" : "N",
        id: data._id,
      }))
      .sort((a, b) => (a.problemTitle < b.problemTitle ? -1 : 1));
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - problems.length) : 0;

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
            ? problems.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : problems
          )
            .filter((row) => row.status === "Y")
            .map((row) => (
              <TableRow key={row.problemTitle}>
                <TableCell className="text-white" component="th" scope="row">
                  {<CheckCircleOutlineIcon style={{ color: "green" }} />}
                </TableCell>
                <TableCell className="text-white" component="th" scope="row">
                  {/* Use Link to create a dynamic link */}
                  <Link
                    to={`/problem/${row.id}`}
                    className="hover:text-blue-400 hover:cursor-pointer"
                  >
                    <p className="hover:text-blue-400 hover:cursor-pointer">
                      {row.problemTitle}
                    </p>
                  </Link>
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  {row.level === "Easy" ? (
                    <p style={{ color: "#00Af9B" }}>Easy</p>
                  ) : row.level === "medium" ? (
                    <p style={{ color: "#FFB800" }}>Medium</p>
                  ) : (
                    <p style={{ color: "#FF2D55" }}>Hard</p>
                  )}
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  {row.status}
                </TableCell>
              </TableRow>
            ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={4} />
            </TableRow>
          )}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={problems.length}
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
