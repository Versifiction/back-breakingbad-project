import axios from "axios";

import { Injectable } from '@nestjs/common';

@Injectable()
export class CharactersService {
    getAll() {
      return axios.get(`${process.env.ENDPOINT_BASE_URL}/characters`, {
        params: {
          limit: null,
          offset: null,
          name: ""
        }
      }).then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    getOne(id: string) {
      return axios.get(`${process.env.ENDPOINT_BASE_URL}/characters/${id}`).then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    getRandom() {
      return axios.get(`${process.env.ENDPOINT_BASE_URL}/character/random`).then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    }
}
