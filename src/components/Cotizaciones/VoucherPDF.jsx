import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import PropTypes from "prop-types";

// Registrar la fuente Afacad
Font.register({
  family: "Afacad",
  fonts: [
    {
      src: "/fonts/Afacad-Regular.ttf",
      fontWeight: "normal",
    },
    {
      src: "/fonts/Afacad-Bold.ttf",
      fontWeight: "bold",
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    width: 902,
    height: 546,
    fontFamily: "Afacad",
    padding: 40,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  image: {
    width: 231.6,
    height: 87,
  },
  rightTextContainer: {
    width: 352,
    justifyContent: "flex-start",
  },
  rightText: {
    fontSize: 16,
    fontWeight: "normal",
    textAlign: "right",
    lineHeight: 1,
    color: "#6B6B6B",
    marginBottom: 4,
  },
  divider: {
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    marginVertical: 10,
  },
  clienteBox: {
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  clienteLeft: {
    flexDirection: "column",
    width: "24%",
  },
  clienteRight: {
    flexDirection: "column",
    width: "48%",
    justifyContent: "flex-end",
  },
  clienteLabel: {
    fontSize: 20,
    color: "#00733C",
    fontWeight: "bold",
  },
  clienteLabelD: {
    fontSize: 16,
    color: "#222222",
    fontWeight: 400,
    marginBottom: 2,
  },
  table: {
    width: "100%",
    marginTop: 10,
    
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 6,
  },
  tableHeader: {
    flexDirection: "row",
    paddingVertical: 5,
    backgroundColor: "#5FB868",
    color: "white",
    fontWeight: "bold",
    borderRadius: 5,
    marginBottom: 10,
  },
  tableHRow: {
    backgroundColor: "#EEEEEE",
    borderRadius: 5,
    paddingVertical: 5,
  },
  tableCell: {
    textAlign: "start",
    paddingHorizontal: 20,
  },
  tableintB: {
    textAlign: "start",
    paddingHorizontal: 20,
    fontWeight: 700,
    fontSize: 16,
    color: "#222222",
  },
  tableint: {
    textAlign: "start",
    paddingHorizontal: 20,
    fontWeight: 400,
    fontSize: 16,
    color: "#222222",
  },
  spaceA: {
    width: 150,
  },
  totals: {
    marginTop: 30,
    alignItems: "flex-end",
  },
  totalLine: {
    fontSize: 14,
  },
  totalLabel: {
    fontWeight: 600,
    fontSize: 20,
    color: "#6B6B6B",
  },
  totalValue: {
    color: "#000000",
    fontWeight: 600,
    fontSize: 20,
  },
  // Estilos específicos por columna
  colIsbn: {
    width: "18%",
    paddingHorizontal: 20,
  },
  colArticulo: {
    width: "28%",
    paddingHorizontal: 24,
  },
  colCantidad: {
    width: "12%",
    paddingHorizontal: 10,
  },
  colPrecio: {
    width: "12%",
    paddingHorizontal: 18,
  },
  colDescuento: {
    width: "14%",
    paddingHorizontal: 18,
  },
  colTotal: {
    width: "16%",
    paddingHorizontal: 20,
  },  
});

const VoucherPDF = ({ data }) => (
  <Document>
    <Page size={{ width: 902, height: 546 }} style={styles.page}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Image src="/images/edi.png" style={styles.image} />
        <View style={styles.rightTextContainer}>
          <Text style={styles.rightText}>Librería Ediciones Hispánicas</Text>
          <Text style={styles.rightText}>NIT: 901462203 - 1</Text>
          <Text style={styles.rightText}>
            Dirección: Cra. 50 #38a-185 Bello, Antioquia
          </Text>
          <Text style={styles.rightText}>Cotización #{data.cotizacionId}</Text>
          <Text style={styles.rightText}>Expedición: {data.fecha}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      {/* Datos del cliente */}
      <View style={styles.clienteBox}>
        <View style={styles.clienteLeft}>
          <Text style={styles.clienteLabel}>Datos del cliente</Text>
          <Text style={styles.clienteLabelD}>{data.cliente}</Text>
          <Text style={styles.clienteLabelD}>Teléfono: {data.telefono}</Text>
        </View>
        <View style={styles.clienteRight}>
          <Text style={styles.clienteLabelD}>Email: {data.email}</Text>
          <Text style={styles.clienteLabelD}>Dirección: {data.direccion}</Text>
        </View>
      </View>

      {/* Tabla de productos */}
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={[styles.tableCell, styles.colIsbn]}>ISBN</Text>
          <Text style={[styles.tableCell, styles.colArticulo]}>Artículo</Text>
          <Text style={[styles.tableCell, styles.colCantidad]}>Cantidad</Text>
          <Text style={[styles.tableCell, styles.colPrecio]}>Precio</Text>
          <Text style={[styles.tableCell, styles.colDescuento]}>Descuento</Text>
          <Text style={[styles.tableCell, styles.colTotal]}>Total</Text>
        </View>
        <View style={styles.tableHRow}>
          {data.items.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={[styles.tableintB, styles.colIsbn]}>
                {item.isbn}
              </Text>
              <Text style={[styles.tableint, styles.colArticulo]}>
                {item.nombre}
              </Text>
              <Text style={[styles.tableint, styles.colCantidad]}>
                {item.cantidad}
              </Text>
              <Text style={[styles.tableint, styles.colPrecio]}>
                ${item.precio.toLocaleString()}
              </Text>
              <Text style={[styles.tableint, styles.colDescuento]}>
                {item.descuento}%
              </Text>
              <Text style={[styles.tableint, styles.colTotal]}>
                ${item.total.toLocaleString()}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Totales */}
      <View style={styles.totals}>
        <Text style={styles.totalLine}>
          <Text style={styles.totalLabel}>Descuento: </Text>
          <Text style={styles.totalValue}>
            ${data.descuentoTotal.toLocaleString()}
          </Text>
        </Text>
        <Text style={styles.totalLine}>
          <Text style={styles.totalLabel}>Total: </Text>
          <Text style={styles.totalValue}>${data.total.toLocaleString()}</Text>
        </Text>
      </View>
    </Page>
  </Document>
);

VoucherPDF.propTypes = {
  data: PropTypes.shape({
    cotizacionId: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
    cliente: PropTypes.string.isRequired,
    telefono: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    direccion: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        isbn: PropTypes.string.isRequired,
        nombre: PropTypes.string.isRequired,
        cantidad: PropTypes.number.isRequired,
        precio: PropTypes.number.isRequired,
        descuento: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
      })
    ).isRequired,
    descuentoTotal: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
};

export default VoucherPDF;
