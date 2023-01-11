/* eslint-disable @typescript-eslint/ban-types */
import { Component } from '@angular/core';
import { resultsData } from '../../../assets/resultados';
import { pontuationData } from 'src/assets/sistema_pontuacao';
import { ExportToCsv } from 'export-to-csv';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  modalitys = pontuationData.map((item) => item.event);
  athletes = resultsData.map((item) => item.athlete);

  athletesResults = resultsData.map((item) =>
    item.results.map((data) => data.result)
  );
  exportCSV() {
    const athleteAllResults: any = resultsData;
    athleteAllResults.forEach(
      (item: { position: string; results: any[] }, i: number) => {
        item.position = `${i + 1}°`;
        const score = item.results.map((data) => data.result);
        item.results = score;
      }
    );
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Decathlon CSV',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
    };
    console.log(athleteAllResults);

    const csvExporter = new ExportToCsv(options);

    csvExporter.generateCsv(athleteAllResults);
  }
}
