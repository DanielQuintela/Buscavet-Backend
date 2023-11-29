import Ajv from 'ajv';
import schema from './SchemaValidate.json' assert { type: 'json' };

export default async function validarCRMV(crmv) {
  try {
    const ajv = new Ajv();
    const url = 'https://app.cfmv.gov.br/pf/consultaInscricao/';
    const filtro = 3;
    const procurar = 2;
    const uf = 'SE';
    const recaptcha = '03AFcWeA6Tl9HRGy4oMGSwyXD3EsdSxyiUwNoGna78okwcuj34KfzTPnEKWNmBs9JR5lkZrXmFPyk04gnHaMF_yYMIN2qosStBG0anOlC78uLEv6rNovibVLuvlBJ_tbbjMFXK47vH9P1lo5sg_dNdgsj68_0xSV-N8jJVfg5ePvA23kTpA3AsZcHE1LCHGzJDW71VeuYpHw5DHcRcmo8Roy6Ix0j6g5wjFt0uytnfLUm2T78QSTcZl2jcRouX9eWRbGFG2H-pR6w3bGmKiUbvUwc-8HCckR3ZG0Wfkvn76nD9D1giz-CU_foZ5HcInYOqGtICt8XmZsxYooUmyz4YKhIe4kuUbZMw-th53-YhCWsfPkUM-Mvau_coF3aiPKrzWOwKSAY1z97c5gTrn2uar_9Rqg5DNgDNKpWPei7zCBspQv0P0Fexl50LhJ9QtKIHZ3O4b7xqH9T_J2Fv-2Z3z9XnHUjnLWnOCfWyD6pbM4y7kqM0I04ww0Mr0zAxOR4D_xsM-RW3fVKi-nimTKXW-yPhOCZ5797eiheqkePXQq7HnPDWnxW-0lw?_=1698944735445';
    const urlCompleta = `${url + crmv}/${filtro}/${procurar}/${uf}/${recaptcha}`;

    const response = await fetch(urlCompleta, {
      headers: {},
      method: 'GET',
      mode: 'cors',
    });

    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
    const data = await response.json();
    const validate = ajv.compile(schema);
    const valid = validate(data);

    if (!valid) {
      console.log('Crmv inválido', validade.errors);
      throw new Error('Crmv inválido');
    }
    console.log('Crmv válido!');

    return data;
  } catch (error) {
    console.error('Erro durante a validação do crmv', error);
    throw error;
  }
}
