import serviceApi from '../../service/episodio'

export default{
    namespaced:true,
    state:{
        episodios: [],
        episodioDetalhes:[],
        pageIndex : 1,
        episodioFiltrados:[]
  },
  mutations: {
    SET_EPISODIOS(state, payload) {
      state.episodios = payload;
    },
    SET_DETALHES_EPISODIOS(state, payload){
      state.episodiosDetalhes = payload
    },
    SET_EPISODIOS_PAGINADOS(state, payload){
      state.episodios = payload
    },

    SET_PAGE_INDEX(state, page){
      state.pageIndex = state.pageIndex + page
    },

    REMOVE_PAGE_INDEX(state, page){
      state.pageIndex = state.pageIndex - page
    },
    SET_EPISODE_FILTERED(state, payload){
      state.episodiosFiltrados = payload
    }

  },
  actions: {
    getEpisodios(context) {
      return serviceApi.getEpisodios().then((res) => {  
        context.commit("SET_EPISODIOS", res.data.results);
      });
    },
    getEpisodioById(contex, id){
      return serviceApi.getEpisodioById(id).then(res =>{
        contex.commit('SET_DETALHES_EPISODIO', res.data)
      })
    },
    getEpisodioByPage(context, params){
      return serviceApi.getEpisodioByPage(params.id).then(res =>{
          context.commit('SET_EPISODIOS_PAGINADOS', res.data.results)
      })
    },
    getEpisodioByName(context, payload) {
      return serviceApi.getEpisodioByName(payload).then((res) => {
        context.commit("SET_EPISODE_FILTERED", res.data.results);
      });
    },
  },
  getters: {
    listEpisodios(state) {
      if(state.episodioFiltrados.length >0){
        return state.episodioFiltrados
      }
      return state.episodio;
    },
    listDetalhesEpisodio(state){
      return state.episodioDetalhes
    },
    getPageIndex(state){
      return state.pageIndex
    }
  },
};
    
//   },
//    mutations:{
//        SET_EPISODIOS(state, payload){
//            state.episodios = payload
//        }
//    },
//    actions:{
//        getEpisodios(context){
//            return serviceApi.getEpisodios().then(res =>{
//                context.commit('SET_EPISODIOS', res.data.results)
//            })
//        }
//    },
//    getters:{
//        listEpisodios(state){
//            return state.episodios
//        }
//    }
//}