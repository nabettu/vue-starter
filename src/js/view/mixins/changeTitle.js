import { meta } from '../../../../config'

export default {
  mounted() {
    const { title } = this.$options;
    this.changeTitle(title);
  },
  methods: {
    changeTitle: function(title){
      if (title) {
        title = typeof title === 'function' ? title.call(this) : title
        document.title = `${title} | ${meta.site_name}`;
      } else {
        document.title = meta.site_name;
      }
    }
  }
}
