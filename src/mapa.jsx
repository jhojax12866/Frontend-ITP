import { useState } from "react";
import { Card, CardContent, Typography, Button, Box, Grid } from "@mui/material";

const ubicaciones = {
  Mocoa: { lat: 1.15698, lng: -76.65139, descripcion: "Sede Principal Mocoa" },
  "Valle del Guamez" : { lat:0.4169643707633325, lng: -76.90685878962947,descripcion: "Extensión Valle del Guamuez." },
  Sibundoy: {lat: 1.18923, lng: -76.97312,descripcion: "Subsede Sibundoy Sede Nazaret." },
};

function Mapa() {
  const [ubicacion, setUbicacion] = useState("Mocoa");

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f4f4f4" p={3}>
      <Grid container spacing={3} maxWidth="lg">
        {/* Sección Izquierda (Botones) */}
        <Grid item xs={24} md={8}>
          <Box display="flex" flexDirection="column" gap={2}>
            {Object.keys(ubicaciones).map((ciudad) => (
              <Card key={ciudad} sx={{ p: 2, boxShadow: 2 }}>
                <Typography variant="h6" fontWeight="bold">{ciudad}</Typography>
                <Typography variant="body2" color="textSecondary">{ubicaciones[ciudad].descripcion}</Typography>
                <Button
                  variant={ubicacion === ciudad ? "contained" : "outlined"}
                  color="primary"
                  onClick={() => setUbicacion(ciudad)}
                  sx={{ mt: 1 }}
                >
                  Ver {ciudad}
                </Button>
              </Card>
            ))}
          </Box>
        </Grid>

        {/* Sección Derecha (Mapa) */}
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 2, boxShadow: 3, textAlign: "center" }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Ubicación: {ubicacion}
            </Typography>
            <CardContent>
              <iframe
                title={ubicaciones[ubicacion].descripcion}
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "10px" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${ubicaciones[ubicacion].lat},${ubicaciones[ubicacion].lng}&output=embed`}
              ></iframe>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Mapa;
