import { Injectable } from "@nestjs/common";
import { CalculaDistanciaEuclidianaDto, CoordenadasDto } from "./dto/calcula-distancia-euclidiana.dto";
import { RetornaDistanciaEuclidianaDto } from "./dto/retorna-distancia-euclidiana.dto";
import { IDistanciaEuclidiana } from "./interface/IDistanciaEuclidiana";

@Injectable()
export class DistanciaEuclidiana implements IDistanciaEuclidiana {
    constructor() {}

    /**
     * calculaDistanciaCoordenadas
     */
    public calculaDistanciaCoordenadas(coordenadas: CalculaDistanciaEuclidianaDto[]): RetornaDistanciaEuclidianaDto[] {

        let distanciasEuclidianas: RetornaDistanciaEuclidianaDto[] = [];
        let indexAuxiliar: number = 0;

        for ( let coordenadaA of coordenadas ) {

            for (let i = indexAuxiliar + 1; i < coordenadas.length; i++) {
                let coordenadaB: CalculaDistanciaEuclidianaDto = coordenadas[i];

                distanciasEuclidianas.push({
                    enderecoPontoA: coordenadaA.endereco,
                    enderecoPontoB: coordenadaB.endereco,
                    distanciaEuclidiana: this.obtemDistanciaEntreDoisPontos(coordenadaA.coordenadas, coordenadaB.coordenadas)
                });
            }
            ++indexAuxiliar
        }
        return distanciasEuclidianas;
    }

    private obtemDistanciaEntreDoisPontos(coordenadaA: CoordenadasDto, coordenadaB: CoordenadasDto): number {

        if ((coordenadaA.lat === coordenadaB.lat) && (coordenadaA.lng === coordenadaB.lng)) {
            console.log('aqui')
            return 0;
        }
        const radlat1 = Math.PI * coordenadaA.lat/180;
        const radlat2 = Math.PI * coordenadaB.lat/180;
        const theta = coordenadaA.lng-coordenadaB.lng;
        const radtheta = Math.PI * theta/180;
        let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) dist = 1;
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        dist = dist * 1.609344
        return dist;
    }
}