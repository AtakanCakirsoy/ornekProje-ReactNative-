import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
//projenin içine npm install --save axios kurduk terminalden.
//Bunun sayesinde get request, post requestleri servisimize atabilmemiz için gerekli olan network request frameworkü. 
//Dahil ettikten sonra projemize import edicez.

import Detay from './Detay';

//Class Component ekledik çünkü, servise bağlanıp oradan data çekebilmek.
//Metoda bağlı olan değilde, sınıfa bağlı olan component kullanmamız gerekiyor. 
class Liste extends Component {

    state = { data: [] };

    //componentWillMount ta hata verdi, geçici bir çözüm olarak UNSAFE_ eklememi önerdi.
    //Bu metodları kullanmamızın nedeni, uygulama ilk açıldığında gerekli olan dataları rendera düşmeden çekmemiz gerekiyor ki render metodu içerisinden
    //liste sayfasından detay sayfasına gerekli olan dataları gönderelim
    UNSAFE_componentWillMount() {
        /* Axiosu entegre edip, get metodunu çalıştırarak url'e gönderdik, hata almadan dönerse response edip logladık.
        Diğer videoda, logu kaldırık, dönen responsenin datasını alıp data arrayin içerisine aktarıyoruz.  */
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ data: response.data }));
        /*debugger; //ctrl+m yapıp debug'ı seçtiğinde bunun sayesinde tek tek gezebilirsin f12 yapıp
        const a = 5;//Debug almanın yararıda uygulama ilk açıldığında hangi metoda düşer, rendera düştüğünde hangi metoda gider vs. bilmek için*/
    }

    componentDidMount() {

    }

    renderData() {
        //responseData ile https://rallycoding.herokuapp.com/api/music_albums şurdaki 1 tane {} arasındaki yere ulaşıyoruz.
        //ulaşıyoruz ve ordan sadece title' alıyoruz.
        //(responseData,Id) yazdık, Id yazmamızın sebebi program bize her dönen değer için
        //0,1,2 diye değer vericek. Uniqe key hatasını engellemek içinde Text'e key olarak o Id'yi atadık.
        return this.state.data.map((responseData, Id) =>
            <Detay key={Id} data={responseData} />); //responseData'nın içerinse data'yı aktarıyoruz.Detay o datayı alıyor.
    }

    render() {
        console.log('gelen data ' + this.state);
        console.log('render');
        return (
            <ScrollView style={{ marginTop: 5 }}>
                {this.renderData()}
            </ScrollView>
        );
    }
}
export default Liste;

//Çalışma Sırası : ComponentWillMount -> State içerisindeki Data -> render -> renderData