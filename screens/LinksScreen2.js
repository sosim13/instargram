import * as React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Clipboard,
} from 'react-native';
import Constants from 'expo-constants';
import * as WebBrowser from 'expo-web-browser';
import database from "./data"; 

const data_id = database;



const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    link: 'http://bnbd.co.kr',
    question: '문제는 무엇인가?',
    answer: '호랑이',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    link: 'http://bnbd.co.kr',
    question: '문제는 무엇인가?',
    answer: '곰돌이',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item1',
    link: 'http://bnbd.co.kr',
    question: '문제는 무엇인가?',
    answer: '호랑이',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Third Item2',
    link: 'http://bnbd.co.kr',
    question: '문제는 무엇인가?',
    answer: '호랑이',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Third Item3',
    link: 'http://bnbd.co.kr',
    question: '문제는 무엇인가?',
    answer: '호랑이',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Third Item4',
    link: 'http://bnbd.co.kr',
    question: '문제는 무엇인가?',
    answer: '검은호랑이등가죽',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Third Item5',
    link: 'http://bnbd.co.kr',
    question: '문제는 무엇인가?',
    answer: '호랑이',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    title: 'Third Item6',
    link: 'http://bnbd.co.kr',
    question: '문제는 무엇인가?',
    answer: '호랑이',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'Third Item7',
    link: 'http://bnbd.co.kr',
    question: '문제는 무엇인가?',
    answer: '호랑이',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d79',
    title: 'Third Item8',
    link: 'http://bnbd.co.kr',
    question: '문제는 무엇인가?',
    answer: '호랑이',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d80',
    title: 'Third Item9',
    link: 'http://bnbd.co.kr',
    question: '문제는 무엇인가?',
    answer: '호랑이',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d81',
    title: 'Third Item10',
    link: 'http://bnbd.co.kr',
    question: '문제는 무엇인가?',
    answer: '호랑이',
  },
];

function handleBnbdPress() {
  WebBrowser.openBrowserAsync('http://bnbd.co.kr');
}

function handleClipBoardPress(text, link) {
  Alert.alert(text);
  Clipboard.setString(text);
  if(link != ''){
	  WebBrowser.openBrowserAsync(link);
  }
}

function Item({ id, title, link, question, answer, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.item,
        { backgroundColor: selected ? '#5f8ea8' : '#d0e9f7' },
      ]}
    >
      <Text onPress={handleBnbdPress} style={styles.title}>{title}</Text>
	  <View style={styles.layout}>
      <Text style={styles.question}>{question}</Text>
	  <Text style={styles.answer}>{answer}</Text>
	  </View>
	  <View style={styles.layout_button}>
		  <View style={styles.layout_button}>
		  <Button
			  title="Copy"
			  onPress={() => handleClipBoardPress(answer, '')}
			/>
			</View>
		  <View style={styles.layout_button}>
		  <Button
			  title="Copy & Go"
			  onPress={() => handleClipBoardPress(answer, link)}
			/>			
			</View>
	  </View>
    </TouchableOpacity>
  );
}

export default function LinksScreen2() {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data_id}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            title={item.title}
            link={item.link}
            question={item.question}
            answer={item.answer}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#c3c3c3',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
  },
  question: {
	flex: 2,
    fontSize: 10,
  },
  answer: {
	flex: 1,
    fontSize: 12,
	fontWeight: "bold",
	alignItems: "flex-end",
  },
  layout: {
	flexDirection: "row",
  },
  layout_button: {
    padding: 5,
	flexDirection: "row",
	
  },
});