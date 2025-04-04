import React from 'react';
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Font,
    Image,
} from '@react-pdf/renderer';

// Estilos para el PDF
const styles = StyleSheet.create({
    page: {
        width: 902,
        height: 546,
        padding: 20,
        fontSize: 12,
        fontFamily: 'Helvetica',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#007200',
    },
    section: {
        marginVertical: 10,
    },
    table: {
        width: '100%',
        marginTop: 10,
    },
    tableRow: {
        flexDirection: 'row',
        borderBottom: '1px solid #ccc',
        paddingVertical: 5,
    },
    tableHeader: {
        backgroundColor: '#4CAF50',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 5,
    },
    tableCell: {
        flex: 1,
        textAlign: 'center',
    },
    boldText: {
        fontWeight: 'bold',
    },
    summary: {
        marginTop: 10,
        textAlign: 'right',
    },
    image: {
        width: 207.9,
        height: 77.4,
    },
    textgris: {
        color: '#6B6B6B',
        fontSize: 12, // Puedes subir a 14 si se ve bien
        fontFamily: 'Helvetica', // Asegura que esté registrada
        lineHeight: 1.4,
    },


});

const VoucherPDF = ({ data }) => (
    <Document>
        <Page size={[902, 546]} style={styles.page}>
            {/* Header */}
            <View style={styles.header}>
                <Image src={'/images/edi.png'} style={styles.image} />
                <View>
                    <Text style={styles.textgris}>Librería Ediciones Hispánicas</Text>
                    <Text style={styles.textgris}>NIT: 901462203 - 1</Text>
                    <Text style={styles.textgris}>Dirección: Cra. 50 #38a-185 Bello, Antioquia</Text>
                    <Text style={styles.textgris}>Cotización #{data.cotizacionId}</Text>
                    <Text style={styles.textgris}>Expedición: {data.fecha}</Text>
                </View>

            </View>

            {/* Datos del cliente */}
            <View style={styles.section}>
                <Text style={styles.boldText}>Datos del Cliente</Text>
                <Text>{data.cliente}</Text>
                <Text>Teléfono: {data.telefono}</Text>
                <Text>Email: {data.email}</Text>
                <Text>Dirección: {data.direccion}</Text>
            </View>

            {/* Tabla de productos */}
            <View style={styles.table}>
                <View style={[styles.tableRow, styles.tableHeader]}>
                    <Text style={styles.tableCell}>ISBN</Text>
                    <Text style={styles.tableCell}>Artículo</Text>
                    <Text style={styles.tableCell}>Cantidad</Text>
                    <Text style={styles.tableCell}>Precio</Text>
                    <Text style={styles.tableCell}>Descuento</Text>
                    <Text style={styles.tableCell}>Total</Text>
                </View>
                {data.items.map((item, index) => (
                    <View key={index} style={styles.tableRow}>
                        <Text style={styles.tableCell}>{item.isbn}</Text>
                        <Text style={styles.tableCell}>{item.nombre}</Text>
                        <Text style={styles.tableCell}>{item.cantidad}</Text>
                        <Text style={styles.tableCell}>${item.precio.toLocaleString()}</Text>
                        <Text style={styles.tableCell}>{item.descuento}%</Text>
                        <Text style={styles.tableCell}>${item.total.toLocaleString()}</Text>
                    </View>
                ))}
            </View>

            {/* Totales */}
            <View style={styles.summary}>
                <Text>Descuento: <Text style={styles.boldText}>${data.descuentoTotal.toLocaleString()}</Text></Text>
                <Text>Total: <Text style={styles.boldText}>${data.total.toLocaleString()}</Text></Text>
            </View>
        </Page>
    </Document>
);

export default VoucherPDF;
