import { connect } from "react-redux";
import TableButton from "../components/TableButton";
import selectTable from "../actions/selectTable.js";

const mapStateToProps = state => {
  return {
    selectedTable: state.selectedTable,
    tableStatusData: state.tableStatusData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelect: id => {
      dispatch(selectTable(id));
    }
  };
};
const TableButtonContainer = connect(mapStateToProps, mapDispatchToProps)(
  TableButton
);

export default TableButtonContainer;
