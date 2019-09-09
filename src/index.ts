import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport'; // redundant for Report #2
import { WinsAnalysis } from './analyzers/WinsAnalysis'; // redundant for Report #2
import { Summary } from './Summary';

// Create an dinstance of 'MatchReader' and pass in what satisfies the
// 'DataReader' interface
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

// Report #1:
const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);
// Report #2:
const summary1 = Summary.winsAnalysisWithHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches);
summary1.buildAndPrintReport(matchReader.matches);
