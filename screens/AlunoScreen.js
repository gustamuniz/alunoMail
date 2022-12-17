import react, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from 'react-native';

export default function AlunoScreen({ route }) {
    const { id } = route.params;
    const [aluno, setAluno] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch('https://mobile.ect.ufrn.br:3004/alunos/' + id);
            const aluno = await response.json();
            setAluno(aluno);
        }
        getData();
    }, []);

    return (
         <View style={styles.alunoContainer}>
            <View style={styles.aluno}>
                <Image style={styles.imageAluno} source={{ uri: aluno.foto }}/>
                <Text style={styles.textAluno}>{aluno.nome}</Text>
            </View>
            <View style={styles.pais}>
                <Image style={styles.imagePais} source={{ uri: aluno.fotoMae }}/>
                <View>
                    <Text style={styles.textPais}>Mãe</Text>
                    <Text style={styles.textPais}>{aluno.mae}</Text>
                </View>
                
            </View>
            <View style={styles.pais}>
                <Image style={styles.imagePais} source={{ uri: aluno.fotoPai }}/>
                <View>
                    <Text style={styles.textPais}>Pai</Text>
                    <Text style={styles.textPais}>{aluno.pai}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    alunoContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    aluno: {
        height: 200,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageAluno: {
		height: 100,
		width: 100,
        marginTop: 20,
        borderRadius: 20
	},
    textAluno: {
        fontSize: 20
    },
    pais: {
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        margin: 5
    },
    imagePais: {
        height: 50,
        width: 50,
        borderRadius: 10,
        marginRight: 10
    },
    textPais: {
        fontSize: 15
    }
});
  