import { View, Text, StyleSheet, ScrollView } from 'react-native'
import design from '../../constants/newglobal'

const TopBody = ({ artTitle }) => {
  return (
    <View style={[styles.container, {flex: artTitle.length > 62 ? 4 : 9}]}>
      <ScrollView style={styles.scrolling} showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium nibh ipsum consequat nisl. Adipiscing elit ut aliquam purus sit amet luctus. Semper viverra nam libero justo laoreet. Neque volutpat ac tincidunt vitae. Praesent elementum facilisis leo vel fringilla. Non quam lacus suspendisse faucibus interdum posuere. Tellus orci ac auctor augue mauris augue neque gravida. Arcu non sodales neque sodales ut etiam. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Amet cursus sit amet dictum. Et netus et malesuada fames ac. Leo duis ut diam quam. Neque gravida in fermentum et sollicitudin. Sollicitudin nibh sit amet commodo nulla facilisi. Arcu risus quis varius quam. Diam maecenas sed enim ut sem viverra aliquet eget.{`\n`}

          {`\n`} Elementum nisi quis eleifend quam adipiscing vitae proin. Urna neque viverra justo nec ultrices. Nunc mattis enim ut tellus elementum. Dictum fusce ut placerat orci nulla pellentesque dignissim. Elementum nibh tellus molestie nunc non blandit. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Volutpat lacus laoreet non curabitur. Id aliquet risus feugiat in ante metus dictum. Velit scelerisque in dictum non consectetur. Vulputate mi sit amet mauris commodo. Mi bibendum neque egestas congue quisque. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Consectetur purus ut faucibus pulvinar.{`\n`}

          {`\n`} In ante metus dictum at tempor commodo ullamcorper a. Massa ultricies mi quis hendrerit dolor magna. Nulla facilisi nullam vehicula ipsum. Scelerisque eu ultrices vitae auctor. Erat imperdiet sed euismod nisi. In nisl nisi scelerisque eu ultrices vitae auctor eu. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Mi sit amet mauris commodo quis imperdiet. Mauris augue neque gravida in fermentum.{`\n`}

          {`\n`} Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Consequat nisl vel pretium lectus quam. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Pharetra vel turpis nunc eget. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Parturient montes nascetur ridiculus mus. Placerat duis ultricies lacus sed turpis tincidunt. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus. Cras semper auctor neque vitae tempus quam pellentesque. Amet mattis vulputate enim nulla aliquet. Ut faucibus pulvinar elementum integer enim neque volutpat. Odio ut sem nulla pharetra diam sit amet nisl. Amet risus nullam eget felis eget nunc. Pretium viverra suspendisse potenti nullam ac tortor vitae. Viverra suspendisse potenti nullam ac.{`\n`}

          {`\n`} Purus in massa tempor nec feugiat nisl pretium fusce id. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus. Ut porttitor leo a diam sollicitudin tempor id eu. Tellus in hac habitasse platea dictumst vestibulum. Felis donec et odio pellentesque diam volutpat commodo. Diam in arcu cursus euismod quis viverra nibh cras. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Faucibus vitae aliquet nec ullamcorper sit amet. Dui faucibus in ornare quam viverra orci sagittis eu. Quis varius quam quisque id diam. Ridiculus mus mauris vitae ultricies. Faucibus scelerisque eleifend donec pretium vulputate sapien. Eleifend donec pretium vulputate sapien nec sagittis. Placerat in egestas erat imperdiet sed euismod. Nunc sed velit dignissim sodales ut eu sem. At erat pellentesque adipiscing commodo elit. Pharetra et ultrices neque ornare aenean euismod elementum. Feugiat nibh sed pulvinar proin gravida hendrerit. Urna cursus eget nunc scelerisque viverra mauris in.
        </Text>
      </ScrollView>
    </View>
  )
}

export default TopBody

const styles = StyleSheet.create({
  container: {
    backgroundColor: design.NEW_SCHEME_WHITE,
    width: '100%',
    alignContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 30,
  },
  scrolling: {
    height: '80%',
  }
})