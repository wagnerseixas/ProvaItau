package br.com.provamobile.support;

import com.opencsv.CSVReader;

import java.io.Reader;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;

public class ReaderCSV {

    public ArrayList<String> oneByOne(String SAMPLE_CSV_FILE_PATH, String CT) throws Exception {
        ArrayList<String> list = new ArrayList();
        String[] nextRecord;

        try (
                Reader reader = Files.newBufferedReader(Paths.get(SAMPLE_CSV_FILE_PATH));
                CSVReader csvReader = new CSVReader(reader);
        ) {
            // Reading Records One by One in a String array
            while ((nextRecord = csvReader.readNext()) != null) {
                //System.out.print( "passou aqui"+nextRecord[1]);
                if (nextRecord[0].equalsIgnoreCase(CT)){

                    for (String cell: nextRecord) {
                       // System.out.print(cell + " Campos a serem testados");
                        list.add(cell);
                    }
                }
            }
            System.out.print("\n");
            reader.close();
            csvReader.close();

        }
        return list;
    }
}

