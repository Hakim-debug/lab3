import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  Modal,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useState } from "react";

const createTwoButtonAlert = () => {
  Alert.alert(
    "Alert",
    "My Alert Message",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ],
    { cancelable: false }
  );
};

export default function App() {
  const [value, onChangeText] = useState("Your name");

  const [modalVisible, setModalVisible] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  if (value === "") {
    var textName = (
      <View style={{ flexDirection: "row" }}>
        <Text>Hello Guest!</Text>
        <Image
          style={{ height: 150, width: 150 }}
          source={require("./assets/favicon.png")}
        ></Image>
      </View>
    );
  } else {
    textName = (
      <View style={{ flexDirection: "row" }}>
        <Text>Hello {value}!</Text>
        <Image
          style={{ height: 150, width: 150 }}
          source={require("./assets/watch.jpg")}
        ></Image>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
      >
        {textName}
      </TouchableOpacity>

      <Modal visible={modalVisible}>
        <View
          style={{
            backgroundColor: "yellow",
            marginLeft: 25,
            marginTop: 50,
            width: "100%",
            height: "25%",
          }}
        >
          <Text>Please Enter Your Name:</Text>
          <TextInput
            placeholder={""}
            onChangeText={(text) => onChangeText(text)}
            value={value}
          ></TextInput>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
            }}
            title="Close"
          >
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <ScrollView style={{ marginTop: 50 }}>
        <Text>
          Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin.
          Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd
          boksättare tog att antal bokstäver och blandade dem för att göra ett
          provexemplar av en bok. Lorem ipsum har inte bara överlevt fem
          århundraden, utan även övergången till elektronisk typografi utan
          större förändringar. Det blev allmänt känt på 1960-talet i samband med
          lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med
          mjukvaror som Aldus PageMaker. Lorem Ipsum är en utfyllnadstext från
          tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan
          1500-talet, när en okänd boksättare tog att antal bokstäver och
          blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har
          inte bara överlevt fem århundraden, utan även övergången till
          elektronisk typografi utan större förändringar. Det blev allmänt känt
          på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av
          Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.
        </Text>

        <Text>
          I motsättning till vad många tror, är inte Lorem Ipsum slumpvisa ord.
          Det har sina rötter i ett stycke klassiskt litteratur på latin från 45
          år före år 0, och är alltså över 2000 år gammalt. Richard McClintock,
          en professor i latin på Hampden-Sydney College i Virginia, översatte
          ett av de mer ovanliga orden, consectetur, från ett stycke Lorem Ipsum
          och fann dess ursprung genom att studera användningen av dessa ord i
          klassisk litteratur. Lorem Ipsum kommer från styckena 1.10.32 och
          1.10.33 av "de Finibus Bonorum et Malorum" (Ytterligheterna av ont och
          gott) av Cicero, skriven 45 före år 0. Boken är en avhandling i
          teorier om etik, och var väldigt populär under renäsanssen. Den
          inledande meningen i Lorem Ipsum, "Lorem Ipsum dolor sit amet...",
          kommer från stycke 1.10.32. Lorem Ipsum är en utfyllnadstext från
          tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan
          1500-talet, när en okänd boksättare tog att antal bokstäver och
          blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har
          inte bara överlevt fem århundraden, utan även övergången till
          elektronisk typografi utan större förändringar. Det blev allmänt känt
          på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av
          Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker. Den
          ursprungliga Lorem Ipsum-texten från 1500-talet är återgiven nedan för
          de intresserade. Styckena 1.10.32 och 1.10.33 från "de Finibus Bonorum
          et Malorum" av Cicero hittar du också i deras originala form, åtföljda
          av de engelska översättningarna av H. Rackham från 1914.
        </Text>

        <Text>
          Det är ett välkänt faktum att läsare distraheras av läsbar text på en
          sida när man skall studera layouten. Poängen med Lorem Ipsum är att
          det ger ett normalt ordflöde, till skillnad från "Text här, Text här",
          och ger intryck av att vara läsbar text. Många publiseringprogram och
          webbutvecklare använder Lorem Ipsum som test-text, och en sökning
          efter "Lorem Ipsum" avslöjar många webbsidor under uteckling. Olika
          versioner har dykt upp under åren, ibland av olyckshändelse, ibland
          med flit (mer eller mindre humoristiska).
        </Text>
      </ScrollView>

      <View
        style={{
          marginBottom: 25,
          marginLeft: 25,
          marginTop: 20,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => createTwoButtonAlert()}>
          <Text>Load More</Text>
        </TouchableOpacity>
        <ActivityIndicator animating={isLoading} size="small" color="blue" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    marginTop: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});
