import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import {
  Table,
  Row,
  Rows,
  TableWrapper,
  Cell,
} from "react-native-table-component";

export default function tableSummaryKebutuhan(props) {
  const [tableHead, setTableHead] = useState([
    "Kelompok",
    "Jenis Barang",
    "Sub Jenis Barang",
    "Satuan",
    "Jumlah Pabrik",
    "Kapasitas Perbulan",
    "Kapasitas s.d Des 2020",
    "Kebutuhan",
    "Selisih",
  ]);

  const [tableData, setTableData] = useState([
    [
      "APD",
      "Gown/Surgical Gown (Medical Grade)",
      "Gown/Surgical Gown (Medical Grade)",
      "PCE",
      6,
      508800,
      4579200,
      5529185,
      -949985,
    ],
    [
      "APD",
      "Masker",
      "Masker -Medical (N95)",
      "PCE",
      1,
      30000000,
      270000000,
      7645686,
      262354314,
    ],
    [
      "APD",
      "Masker",
      "Masker - Surgical",
      "PCE",
      21,
      235000000,
      270000000,
      7645686,
      262354314,
    ],
    [
      "APD",
      "Masker",
      "Masker - Non Medical (Diversifikasi...",
      "PCE",
      12,
      65150000,
      586350000,
      0,
      0,
    ],
  ]);

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20, fontWeight: "bold" }}>
        Sumary Kebutuhan
      </Text>
      <ScrollView horizontal={true}>
        <View>
          <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
            <Row
              data={tableHead}
              style={styles.head}
              textStyle={styles.text}
              widthArr={[80, 250, 300, 60, 100, 100, 100, 100, 100]}
            />
            <Rows
              data={tableData}
              textStyle={styles.text}
              widthArr={[80, 250, 300, 60, 100, 100, 100, 100, 100]}
            />
          </Table>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#fff",
    marginVertical: 20,
  },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6, textAlign: "center" },
});
