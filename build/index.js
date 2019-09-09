"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport"); // redundant for Report #2
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis"); // redundant for Report #2
var Summary_1 = require("./Summary");
// Create an dinstance of 'MatchReader' and pass in what satisfies the
// 'DataReader' interface
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
// Report #1:
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
// Report #2:
var summary1 = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
summary1.buildAndPrintReport(matchReader.matches);
