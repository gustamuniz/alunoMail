import { StyleSheet, Text, Image, View, FlatList, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';

export default function Email({ navigation }) {

    const [email, setEmail] = useState();

    useEffect(() => {
			async function getData() {
				const response = await fetch('https://mobile.ect.ufrn.br:3004/alunos');
				const email = await response.json();
				setEmail(email)
			}
			getData();
    }, []);

    function renderItem({item}) {
		return <TouchableOpacity style={styles.email} onPress={() => navigation.navigate('AlunoScreen', { id: item.id })}>
			<Image style={styles.image} source={{ uri: item.foto }}/>
			<Text style={styles.text}>{item.nome}</Text>
		</TouchableOpacity>
    }
    
    return (
			<View style={styles.inbox}>
				<FlatList
					data={email}
					renderItem={renderItem}
					keyExtractor={item => item.id}
					showsVerticalScrollIndicator={false}
				/>
			</View>
    );
}

const styles = StyleSheet.create({
	inbox: {
		flex: 1,
		backgroundColor: 'white'
	},
	email: {
		height: 100,
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
		borderWidth: 1,
		borderColor: 'gray',
		borderRadius: 5
	},
	image: {
		height: 50,
		width: 50,
		borderRadius: 25,
		marginRight: 10
	},
	text: {
		fontSize: 15
	},

});