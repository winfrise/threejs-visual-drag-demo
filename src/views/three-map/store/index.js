import geoConfig from '../config/geoConfig'

const state = {
    mapData: {
        objectList: [
            { // 正方体
                type: 'BoxGeometry',
                attrs: {
                    width: 1,
                    height: 2,
                    depth: 1,
                },
                position: [10, 10, 10],
                children: [],
            },
            { // 柱体
                type: 'CylinderGeometry',
                attrs: {
                    radiusTop: 5,
                    radiusBottom: 5,
                    height: 20,
                    radialSegments: 32,
                },
                position: [-10, 10, 10],
                children: [],
            },
            { // 楼体
                type: 'IrregularGeometry',
                attrs: {
                    points: [
                        [-3, 0, 1],
                        [-2, 0, 1],

                        [-2, 0, 2],
                        [-1, 0, 2],

                        [-1, 0, 1],
                        [1, 0, 1],

                        [1, 0, 2],
                        [2, 0, 2],

                        [2, 0, 1],
                        [3, 0, 1],

                        [3, 0, -1],
                        [2, 0, -1],
                        [1, 0, -1],
                        [-1, 0, -1],
                        [-2, 0, -1],
                        [-3, 0, -1],
                    ],
                    height: 5,
                },
                position: [0, 1, -0],
                children: [],
            },
        ],
    },
}

const mutations = {
    SET_MAP_DATA(state, data) {
        state.mapData = data
    },
    ADD_GEOMETRY(state, geoType) {
        state.mapData.objectList.push(geoConfig[geoType])
    },
}

const actions = {
    // 获取未处理报警列表
    async setMapData({ commit, data }) {
        commit('SET_MAP_DATA', data)
    },
    addGeo({ commit, geoType }) {
        commit('SET_MAP_DATA', geoType)
    },
}

const getters = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}
