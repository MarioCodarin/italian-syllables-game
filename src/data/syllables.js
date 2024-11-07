export const SYLLABLE_LEVELS = {
  PRINCIPIANTE: [
    // BA, BE, BI, BO, BU
    { id: 'ba', audio: 'ba.mp3' },
    { id: 'be', audio: 'be.mp3' },
    { id: 'bi', audio: 'bi.mp3' },
    { id: 'bo', audio: 'bo.mp3' },
    { id: 'bu', audio: 'bu.mp3' },

    // CA, CE, CI, CO, CU, CHE, CHI
    { id: 'ca', audio: 'ca.mp3' },
    { id: 'ce', audio: 'ce.mp3' },
    { id: 'ci', audio: 'ci.mp3' },
    { id: 'co', audio: 'co.mp3' },
    { id: 'cu', audio: 'cu.mp3' },
    { id: 'che', audio: 'che.mp3' },
    { id: 'chi', audio: 'chi.mp3' },

    // DA, DE, DI, DO, DU
    { id: 'da', audio: 'da.mp3' },
    { id: 'de', audio: 'de.mp3' },
    { id: 'di', audio: 'di.mp3' },
    { id: 'do', audio: 'do.mp3' },
    { id: 'du', audio: 'du.mp3' },

    // FA, FE, FI, FO, FU
    { id: 'fa', audio: 'fa.mp3' },
    { id: 'fe', audio: 'fe.mp3' },
    { id: 'fi', audio: 'fi.mp3' },
    { id: 'fo', audio: 'fo.mp3' },
    { id: 'fu', audio: 'fu.mp3' },

    // GA, GE, GI, GO, GU, GHE, GHI
    { id: 'ga', audio: 'ga.mp3' },
    { id: 'ge', audio: 'ge.mp3' },
    { id: 'gi', audio: 'gi.mp3' },
    { id: 'go', audio: 'go.mp3' },
    { id: 'gu', audio: 'gu.mp3' },
    { id: 'ghe', audio: 'ghe.mp3' },
    { id: 'ghi', audio: 'ghi.mp3' },

    // LA, LE, LI, LO, LU
    { id: 'la', audio: 'la.mp3' },
    { id: 'le', audio: 'le.mp3' },
    { id: 'li', audio: 'li.mp3' },
    { id: 'lo', audio: 'lo.mp3' },
    { id: 'lu', audio: 'lu.mp3' },

    // MA, ME, MI, MO, MU
    { id: 'ma', audio: 'ma.mp3' },
    { id: 'me', audio: 'me.mp3' },
    { id: 'mi', audio: 'mi.mp3' },
    { id: 'mo', audio: 'mo.mp3' },
    { id: 'mu', audio: 'mu.mp3' },

    // NA, NE, NI, NO, NU
    { id: 'na', audio: 'na.mp3' },
    { id: 'ne', audio: 'ne.mp3' },
    { id: 'ni', audio: 'ni.mp3' },
    { id: 'no', audio: 'no.mp3' },
    { id: 'nu', audio: 'nu.mp3' },

    // PA, PE, PI, PO, PU
    { id: 'pa', audio: 'pa.mp3' },
    { id: 'pe', audio: 'pe.mp3' },
    { id: 'pi', audio: 'pi.mp3' },
    { id: 'po', audio: 'po.mp3' },
    { id: 'pu', audio: 'pu.mp3' },

    // QU
    { id: 'qu', audio: 'qu.mp3' },

    // RA, RE, RI, RO, RU
    { id: 'ra', audio: 'ra.mp3' },
    { id: 're', audio: 're.mp3' },
    { id: 'ri', audio: 'ri.mp3' },
    { id: 'ro', audio: 'ro.mp3' },
    { id: 'ru', audio: 'ru.mp3' },

    // SA, SE, SI, SO, SU
    { id: 'sa', audio: 'sa.mp3' },
    { id: 'se', audio: 'se.mp3' },
    { id: 'si', audio: 'si.mp3' },
    { id: 'so', audio: 'so.mp3' },
    { id: 'su', audio: 'su.mp3' },

    // TA, TE, TI, TO, TU
    { id: 'ta', audio: 'ta.mp3' },
    { id: 'te', audio: 'te.mp3' },
    { id: 'ti', audio: 'ti.mp3' },
    { id: 'to', audio: 'to.mp3' },
    { id: 'tu', audio: 'tu.mp3' },

    // VA, VE, VI, VO, VU
    { id: 'va', audio: 'va.mp3' },
    { id: 've', audio: 've.mp3' },
    { id: 'vi', audio: 'vi.mp3' },
    { id: 'vo', audio: 'vo.mp3' },
    { id: 'vu', audio: 'vu.mp3' },

    // ZA, ZE, ZI, ZO, ZU
    { id: 'za', audio: 'za.mp3' },
    { id: 'ze', audio: 'ze.mp3' },
    { id: 'zi', audio: 'zi.mp3' },
    { id: 'zo', audio: 'zo.mp3' },
    { id: 'zu', audio: 'zu.mp3' }
  ],
  INTERMEDIO: [],
  AVANZATO: []
};

export const generateQuizSet = (level = 'PRINCIPIANTE', count = 2) => {
  const syllables = SYLLABLE_LEVELS[level];
  const quizSet = [];
  
  // Randomly select a syllable to be the correct answer
  const correctSyllable = syllables[Math.floor(Math.random() * syllables.length)];
  quizSet.push(correctSyllable);

  // Add random incorrect syllables
  while (quizSet.length < count) {
    const randomSyllable = syllables[Math.floor(Math.random() * syllables.length)];
    if (!quizSet.some(s => s.id === randomSyllable.id)) {
      quizSet.push(randomSyllable);
    }
  }

  // Shuffle the quiz set to randomize button positions
  return quizSet.sort(() => Math.random() - 0.5);
};
