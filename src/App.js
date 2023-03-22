import "./App.css";
import { COPY } from "./copy";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24),
  createData("Ice cream sandwich", 237, 9.0, 37),
  createData("Eclair", 262, 16.0, 24),
  createData("Cupcake", 305, 3.7, 67),
  createData("Gingerbread", 356, 16.0, 49),
];

const buttons = [
  {
    name: COPY.registrar,
    description: COPY.descripcionDeRegistrar,
  },
  {
    name: COPY.consultar,
    description: COPY.descripcionDeConsultar,
  },
  {
    name: COPY.anular,
    description: COPY.descripcionDeAnular,
  },
  {
    name: COPY.imprimir,
    description: COPY.descripcionDeImprimir,
  },
  {
    name: COPY.transferir,
    description: COPY.descripcionDeTransferir,
  },
  {
    name: COPY.limpiar,
    description: COPY.descripcionDeLimpiar,
  },
  {
    name: COPY.salir,
    description: COPY.descripcionDeSalir,
  },
];

function App() {
  return (
    <Container maxWidth="md">
      <Stack divider={<Divider flexItem />} spacing={2}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Typography variant="h5">{COPY.uneg}</Typography>

            <Typography variant="h5">
              {COPY.sistemaDeInformacionDeFinanzas}
            </Typography>
          </div>

          <div>
            <Typography variant="h5" align="right">
              {COPY.registroDeAranceles}
            </Typography>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Typography variant="body1">{COPY.numeroRecibo}</Typography>
            <Typography variant="body1">{COPY.codigoCaja}</Typography>
            <Typography variant="body1">{COPY.nombre}</Typography>
          </div>

          <div>
            <Typography variant="body1">{COPY.fechaRecibo}</Typography>
            <Typography variant="body1">{COPY.cedula}</Typography>
          </div>
        </div>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>{COPY.linea}</TableCell>
                <TableCell align="right">{COPY.concepto}</TableCell>
                <TableCell align="right">{COPY.cantidad}</TableCell>
                <TableCell align="right">{COPY.monto}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Typography variant="body1">{COPY.formaPago}</Typography>
            <Typography variant="body1">{COPY.nroDeposito}</Typography>
            <Typography variant="body1">{COPY.estado}</Typography>
            <Typography variant="body1">{COPY.motivoDeAnulacion}</Typography>
          </div>

          <div>
            <Typography variant="body1">{COPY.total}</Typography>
            <Typography variant="body1">{COPY.banco}</Typography>
            <Typography variant="body1">{COPY.fechaDep}</Typography>
          </div>
        </div>

        <Box>
          <Typography variant="h5" gutterBottom>
            {COPY.opciones}
          </Typography>

          <Grid container spacing={3} columns={10}>
            {buttons.map((button, index) => (
              <Grid xs={2} key={index}>
                <Tooltip title={button.description}>
                  <Button variant="contained">{button.name}</Button>
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
