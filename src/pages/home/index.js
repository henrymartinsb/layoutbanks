import { SnapshotViewIOS, StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Conta de luz',
    value: '275,90',
    date: '13/09/2022',
    type: 0 // despesas
  },
  {
    id: 1,
    label: 'Pix Serviço Cliente',
    value: '2.700,00',
    date: '17/09/2022',
    type: 1 // receita / entradas
  },
  {
    id: 1,
    label: 'Salário',
    value: '8.000,00',
    date: '20/09/2022',
    type: 1 // receita / entradas
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Henry Martins"/>
      
      <Balance saldo="10.424,10" gastos="-275,90"/>

      <Actions/>

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item }) => <Movements data={item}/>}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    fontFamily: '-apple-system, BlinkMacSystemFont, Object Sans',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },

  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
