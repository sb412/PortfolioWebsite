import SimpleTableComponent from "reactjs-simple-table";
import { Box } from "@mui/system";
const columns = [
  {
    field: "number",
    headerName: "TODO"
  },
  {
    field: "description",
    headerName: "TITLE",
  },
];

function Todo() {
  const list = [
    { number: 1, description: "First todo of this table so it must contain a lot of stuff to do in it"},{number : 2,description: "Second todo of this table"},{number : 3 , description: "Third todo of this table"},
    {number : 4 , description: "Fourth todo of this table"}
];
  return (
    <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
	justifyContent={'center'} minHeight={'calc(100vh - 200px)'}>
      <div className="App">
      <SimpleTableComponent columns={columns} list={list} />
      </div>
    </Box>
  );
}

export default Todo;