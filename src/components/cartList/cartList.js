import React, {
  Fragment,
  useState,
  useEffect,
  useCallback,
  useRef
} from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import './cartList.css';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { LeftArrow, RightArrow, Card } from './arrow';

// import MyModal from 'components/modalView/modal';
import { CartState } from '../../context/context';
export default function CartList(props) {
  const {
    className,
    defaultValue,
    disabled,
    onChange,
    item,
    isItemAdded = false,
    ...rest
  } = props;
  console.log(props, 'props');
  const navigate = useNavigate();
  const [list, setList] = useState('');
  const [value, setValue] = useState(defaultValue);
  const mockData = [
    {
      productQTY1: '14',
      productQTY2: '15',
      productQTY3: '16',
      section: 'Grocery',
      price: 5.99,
      productId: '95436',
      facilityId: 2037,
      productName: 'Daves Killer Bread Powerseed Organic Bread',
      brand: "Dave's Killer Bread                 ",
      status: 'Active',
      facilityStatus: 'Active',
      imagePath: '95436.jpg',
      sizeUom: 'OZ ',
      sizeString: '25 OZ',
      sizeNumber: 25.0,
      currentPrice: 5.99,
      normalPrice: 5.99,
      onSale: false,
      prodClass: 91,
      prodSubClass: 81,
      pickable: 1,
      webLifeCycle: 3,
      position: null,
      inventoryControlCode: '0',
      inventoryGroupId: null,
      inventoryGroupTypeCode: null,
      inventoryGroupDefaultDayQty: null,
      inventoryGroupLeadTime: null,
      prodDepartment: 'GROCERY',
      groupNumber: 2,
      staffPick: false,
      rankNotes: null,
      rankShortText: null,
      rankDescription: null,
      rankImage: null,
      rankTypeCode: null,
      salesRank: 999999999,
      coolInfo: null,
      promotionMsg: ' ',
      keywordsString: null,
      priceCondCode: 'Reg',
      additionalSalesText: null,
      isNew: false,
      productDetails:
        'Sweetened only with organic fruit juices. Powerseed is lightly sweet and power-packed with fiber, protein and whole grain nutrition. Contains no high fructose corn syrup, artificial preservatives and artificial ingredients. A Certified USDA Organic and non GMO product.',
      ingredients:
        'Organic Whole Wheat (Organic Whole Wheat Flour, Organic Cracked Whole Wheat), Water, Powerseed Mix (Organic Whole Flax Seeds, Organic Ground Whole Flax Seeds, Organic Rolled Oats, Organic Sunflower Seeds, Organic Pumpkin Seeds, Organic Un-Hulled Brown Sesame Seeds, Organic Un-Hulled Black Sesame Seeds), Organic Wheat Gluten, Organic Fruit Juices (Organic Apple, Organic Pear, Organic Peach), Organic Oat Fiber, Sea Salt, Organic Cultured Whole Wheat, Yeast, Organic Vinegar. ***Warning: Contains: Wheat. Manufactured in a facility that uses tree nuts, dairy and soy.***',
      naturalOrganic: true,
      nationalLocal: false,
      glutenFree: false,
      dietitionsChoice: true,
      wholeGrain: true,
      lowSodium: false,
      heartHealthy: false,
      moreFuelPerUnit: 0.0,
      mealFlag: 'N',
      readyForYouFlag: 'N',
      productQTY1: null,
      productQTY2: null,
      productQTY3: null,
      inventoryCtrlCode: 0,
      articleId: null,
      hasNutritionString: null,
      notSignificantSource: null,
      quantityInCart: null,
      restrictionType: null,
      weightedFlag: 'N',
      nbrTimesOrdered: null,
      isInChart: false,
      jitAvailability: true,
      solrUniqueKey: '954362037',
      healthAttributeCode: [
        'LOW_CHOLESTEROL',
        'LOW_FAT',
        'LOW_SALT',
        'LOW_SATURATED_FAT',
        'LOW_SUGAR'
      ],
      area: ['Snack'],
      healthAttributeImage: [
        'Low or no cholesterol^health1.gif',
        'Low or no saturated fat^health4.gif',
        'Low or no sodium^health2.gif',
        'Low or no fat^health3.gif',
        'Low Sugar^lowsugar.jpg'
      ],
      restrictionId: [],
      attributes: null,
      upcList: ['13764027282'],
      iconImages: null,
      username: null,
      catalogArea: ['PRODUCTS_110267'],
      selection: [],
      sequence: [],
      keywords: ['Bread', ' Bread', ' Bread', ' Bread', ' Bread'],
      productAreaHierarchy: ['4433|109798|100163|110267'],
      randomWeightFlag: null,
      randomWeightLow: null,
      randomWeightHigh: null,
      randomWeightUnitCode: null,
      inventoryGroupName: null,
      controlledSubstanceCode: null,
      restricted: false,
      healthImages: [
        {
          altText: 'Low or no cholesterol',
          imageUrl: 'health1.gif'
        },
        {
          altText: 'Low or no saturated fat',
          imageUrl: 'health4.gif'
        },
        {
          altText: 'Low or no sodium',
          imageUrl: 'health2.gif'
        },
        {
          altText: 'Low or no fat',
          imageUrl: 'health3.gif'
        },
        {
          altText: 'Low Sugar',
          imageUrl: 'lowsugar.jpg'
        }
      ],
      quickSaleProduct: false,
      attributeImages: [],
      iconAttributeCode: [],
      sections: [{ id: 'groceries', label: 'Groceries' }]
    },
    {
      section: 'Grocery',
      price: 5.99,
      productId: '95435',
      facilityId: 2037,
      productName: 'Daves Killer Bread Organic 21 Whole Grains and Seeds Bread',
      brand: 'Daves Killer Bread Bread            ',
      status: 'Active',
      facilityStatus: 'Active',
      imagePath: '95435.jpg',
      sizeUom: 'OZ ',
      sizeString: '27 OZ',
      sizeNumber: 27.0,
      currentPrice: 5.99,
      normalPrice: 5.99,
      onSale: false,
      prodClass: 94,
      prodSubClass: 104,
      pickable: 1,
      webLifeCycle: 3,
      position: null,
      inventoryControlCode: '0',
      inventoryGroupId: null,
      inventoryGroupTypeCode: null,
      inventoryGroupDefaultDayQty: null,
      inventoryGroupLeadTime: null,
      prodDepartment: 'GROCERY',
      groupNumber: 2,
      staffPick: false,
      rankNotes: null,
      rankShortText: null,
      rankDescription: null,
      rankImage: null,
      rankTypeCode: null,
      salesRank: 999999999,
      coolInfo: null,
      promotionMsg: ' ',
      keywordsString: null,
      priceCondCode: 'Reg',
      additionalSalesText: null,
      isNew: false,
      productDetails:
        'With a hearty texture, subtle sweetness and a seed-coated crust, "21" is great for toast, sandwiches or even by itself. Made without high fructose corn syrup. Contains no artificial preservatives and artificial ingredients. Always: power-packed with whole grains, USDA organic, non-GMO and made with killer taste and texture.',
      ingredients:
        'Organic Whole Wheat (Organic Wholewheat Flour, Organic Cracked Whole Wheat), Water, 21 Whole Grains and Seeds Mix (Organic Whole Flax Seeds, Organic Sunflower Seeds, Organic Ground Whole Flax Seeds, Organic Un-Hulled Brown Sesame Seeds, Organic Triticale, Organic Pumpkin Seeds, Organic Rolled Barley, Organic Rolled Oats, Organic Rolled Rye, Organic Un-Hulled Black Sesame Seeds, Organic Millet, Organic Rolled Spelt, Organic Blue Cornmeal, Organic Brown Rice Flour, Organic Yellow Cornmeal, Organic Amaranth Flour, Organic Rolled Kamut Khorasan Wheat, Organic Quinoa, Organic Buckwheat Flour, Organic Sorghum Flour, Organic Poppy Seeds), Organic Dried Cane Syrup (Sugar), Organic Wheat Gluten, Organic Oat Fiber, Organic Molasses, Sea Salt, Organic Cultured Whole Wheat, Yeast, Organic Vinegar. ***Warning: Contains: Wheat. Manufactured in a facility that uses tree nuts, dairy and soy.***',
      naturalOrganic: true,
      nationalLocal: false,
      glutenFree: false,
      dietitionsChoice: true,
      wholeGrain: true,
      lowSodium: false,
      heartHealthy: false,
      moreFuelPerUnit: 0.0,
      mealFlag: 'N',
      readyForYouFlag: 'N',
      productQTY1: null,
      productQTY2: null,
      productQTY3: null,
      inventoryCtrlCode: 0,
      articleId: null,
      hasNutritionString: null,
      notSignificantSource: null,
      quantityInCart: null,
      restrictionType: null,
      weightedFlag: 'N',
      nbrTimesOrdered: null,
      isInChart: false,
      jitAvailability: true,
      solrUniqueKey: '954352037',
      healthAttributeCode: [
        'LOW_CHOLESTEROL',
        'LOW_FAT',
        'LOW_SATURATED_FAT',
        'LOW_SUGAR'
      ],
      area: ['Bread'],
      healthAttributeImage: [
        'Low Sugar^lowsugar.jpg',
        'Low or no cholesterol^health1.gif',
        'Low or no fat^health3.gif',
        'Low or no saturated fat^health4.gif'
      ],
      restrictionId: [],
      attributes: null,
      upcList: ['13764027053'],
      iconImages: null,
      username: null,
      catalogArea: ['PRODUCTS_100152'],
      selection: [],
      sequence: [],
      keywords: ['Bread', ' Bread', ' Bread', ' Bread', ' Bread'],
      productAreaHierarchy: ['4433|109798|100152'],
      randomWeightFlag: null,
      randomWeightLow: null,
      randomWeightHigh: null,
      randomWeightUnitCode: null,
      inventoryGroupName: null,
      controlledSubstanceCode: null,
      restricted: false,
      healthImages: [
        {
          altText: 'Low Sugar',
          imageUrl: 'lowsugar.jpg'
        },
        {
          altText: 'Low or no cholesterol',
          imageUrl: 'health1.gif'
        },
        {
          altText: 'Low or no fat',
          imageUrl: 'health3.gif'
        },
        {
          altText: 'Low or no saturated fat',
          imageUrl: 'health4.gif'
        }
      ],
      quickSaleProduct: false,
      attributeImages: [],
      iconAttributeCode: [],
      sections: [{ id: 'groceries', label: 'Groceries' }]
    },
    {
      section: 'Grocery',
      price: 16.99,
      productId: '898890',
      facilityId: 2037,
      productName: "That's Smart White Enriched Bread",
      brand: "That's Smart!                       ",
      status: 'Active',
      facilityStatus: 'Active',
      imagePath: '898890.jpg',
      sizeUom: 'OZ ',
      sizeString: '16 OZ',
      sizeNumber: 16.0,
      currentPrice: 0.99,
      normalPrice: 0.99,
      onSale: false,
      prodClass: 94,
      prodSubClass: 461,
      pickable: 1,
      webLifeCycle: 3,
      position: null,
      inventoryControlCode: '0',
      inventoryGroupId: null,
      inventoryGroupTypeCode: null,
      inventoryGroupDefaultDayQty: null,
      inventoryGroupLeadTime: null,
      prodDepartment: 'GROCERY',
      groupNumber: 2,
      staffPick: false,
      rankNotes: null,
      rankShortText: null,
      rankDescription: null,
      rankImage: null,
      rankTypeCode: null,
      salesRank: 999999999,
      coolInfo: null,
      promotionMsg: '',
      keywordsString: null,
      priceCondCode: 'Reg                 ',
      additionalSalesText: null,
      isNew: false,
      productDetails: null,
      ingredients: null,
      naturalOrganic: false,
      nationalLocal: false,
      glutenFree: false,
      dietitionsChoice: false,
      wholeGrain: false,
      lowSodium: false,
      heartHealthy: false,
      moreFuelPerUnit: 0.0,
      mealFlag: 'N',
      readyForYouFlag: 'N',
      productQTY1: null,
      productQTY2: null,
      productQTY3: null,
      inventoryCtrlCode: 0,
      articleId: null,
      hasNutritionString: null,
      notSignificantSource: null,
      quantityInCart: null,
      restrictionType: null,
      weightedFlag: 'N',
      nbrTimesOrdered: null,
      isInChart: false,
      jitAvailability: true,
      solrUniqueKey: '8988902037',
      healthAttributeCode: [],
      area: ['Breads'],
      healthAttributeImage: [],
      restrictionId: [],
      attributes: null,
      upcList: ['193476003047'],
      iconImages: null,
      username: null,
      catalogArea: ['PRODUCTS_100010'],
      selection: [],
      sequence: [],
      keywords: ['Bread', ' Bread', ' Bread', ' Bread', ' Bread'],
      productAreaHierarchy: ['4433|109792|100010'],
      randomWeightFlag: null,
      randomWeightLow: null,
      randomWeightHigh: null,
      randomWeightUnitCode: null,
      inventoryGroupName: null,
      controlledSubstanceCode: null,
      restricted: false,
      healthImages: [],
      quickSaleProduct: false,
      attributeImages: [],
      iconAttributeCode: [],
      sections: [{ id: 'groceries', label: 'Groceries' }]
    },
    {
      section: 'Grocery',
      price: 4.29,
      productId: '4458',
      facilityId: 2037,
      productName: 'Country Hearth Dakota Style 12-Grain Bread',
      brand: 'Country Hearth                      ',
      status: 'Active',
      facilityStatus: 'Active',
      imagePath: '4458.jpg',
      sizeUom: 'EA ',
      sizeString: '1 EA',
      sizeNumber: 1.0,
      currentPrice: 2.48,
      normalPrice: 4.29,
      onSale: true,
      prodClass: 94,
      prodSubClass: 104,
      pickable: 1,
      webLifeCycle: 3,
      position: null,
      inventoryControlCode: '0',
      inventoryGroupId: null,
      inventoryGroupTypeCode: null,
      inventoryGroupDefaultDayQty: null,
      inventoryGroupLeadTime: null,
      prodDepartment: 'GROCERY',
      groupNumber: 2,
      staffPick: false,
      rankNotes: null,
      rankShortText: null,
      rankDescription: null,
      rankImage: null,
      rankTypeCode: null,
      salesRank: 999999999,
      coolInfo: null,
      promotionMsg: ' ',
      keywordsString: null,
      priceCondCode: 'Ad                  ',
      additionalSalesText: null,
      isNew: false,
      productDetails:
        "Country Hearth Breads give you and your family a real variety, all with a pleasing texture that's not dry nor hard but still have the taste of good country cooking. Twelve delicious grains. Hearty, not heavy",
      ingredients: null,
      naturalOrganic: false,
      nationalLocal: false,
      glutenFree: false,
      dietitionsChoice: false,
      wholeGrain: false,
      lowSodium: false,
      heartHealthy: false,
      moreFuelPerUnit: 0.0,
      mealFlag: 'N',
      readyForYouFlag: 'N',
      productQTY1: null,
      productQTY2: null,
      productQTY3: null,
      inventoryCtrlCode: 0,
      articleId: null,
      hasNutritionString: null,
      notSignificantSource: null,
      quantityInCart: null,
      restrictionType: null,
      weightedFlag: 'N',
      nbrTimesOrdered: null,
      isInChart: false,
      jitAvailability: true,
      solrUniqueKey: '44582037',
      healthAttributeCode: [
        'LOW_CHOLESTEROL',
        'LOW_FAT',
        'LOW_SATURATED_FAT',
        'LOW_SUGAR'
      ],
      area: ['Advertised Specials', 'Bread'],
      healthAttributeImage: [
        'Low or no fat^health3.gif',
        'Low or no cholesterol^health1.gif',
        'Low or no saturated fat^health4.gif',
        'Low Sugar^lowsugar.jpg'
      ],
      restrictionId: [],
      attributes: null,
      upcList: ['76057018091'],
      iconImages: null,
      username: null,
      catalogArea: ['LISTS_102188', 'PRODUCTS_100152'],
      selection: [],
      sequence: [],
      keywords: ['Bread', ' Bread', ' Bread', ' Bread', ' Bread'],
      productAreaHierarchy: ['4433|109798|100152'],
      randomWeightFlag: null,
      randomWeightLow: null,
      randomWeightHigh: null,
      randomWeightUnitCode: null,
      inventoryGroupName: null,
      controlledSubstanceCode: null,
      restricted: false,
      healthImages: [
        {
          altText: 'Low or no fat',
          imageUrl: 'health3.gif'
        },
        {
          altText: 'Low or no cholesterol',
          imageUrl: 'health1.gif'
        },
        {
          altText: 'Low or no saturated fat',
          imageUrl: 'health4.gif'
        },
        {
          altText: 'Low Sugar',
          imageUrl: 'lowsugar.jpg'
        }
      ],
      quickSaleProduct: false,
      attributeImages: [],
      iconAttributeCode: [],
      sections: [{ id: 'groceries', label: 'Groceries' }]
    },
    {
      section: 'Wine & Spirits',
      price: 5.99,
      productId: '68188',
      facilityId: 2037,
      productName: 'Food For Life Ezekiel 4:9 Sprouted 100% Whole Grain Bread',
      brand: 'Food For Life                       ',
      status: 'Active',
      facilityStatus: 'Active',
      imagePath: '68188.jpg',
      sizeUom: 'OZ ',
      sizeString: '24 OZ',
      sizeNumber: 24.0,
      currentPrice: 5.19,
      normalPrice: 5.49,
      onSale: true,
      prodClass: 143,
      prodSubClass: 201,
      pickable: 1,
      webLifeCycle: 3,
      position: null,
      inventoryControlCode: '10',
      inventoryGroupId: null,
      inventoryGroupTypeCode: null,
      inventoryGroupDefaultDayQty: null,
      inventoryGroupLeadTime: null,
      prodDepartment: 'FROZEN',
      groupNumber: 2,
      staffPick: false,
      rankNotes: null,
      rankShortText: null,
      rankDescription: null,
      rankImage: null,
      rankTypeCode: null,
      salesRank: 999999999,
      coolInfo: null,
      promotionMsg: ' ',
      keywordsString: null,
      priceCondCode: 'TLP                 ',
      additionalSalesText: null,
      isNew: false,
      productDetails:
        'The original flourless low glycemic. As described in the holy scripture verse. All natural. No preservatives. Certified organic grains. The live grain difference! Complete protein. No trans fat. The miracle of the sprouts. Different from most breads today, this unique bread is made from freshly sprouted live grains and contains absolutely no flour. We believe in sprouting the grains we use in our breads because sprouting is the best way to release all of the vital nutrients stored in whole grains. To unlock this dormant food energy, maximize nutrition and flavor, we add just the right amount of water to healthy whole organically grown grains which are already bursting with nutrients. Beneficial enzymes are activated which cause the grains to sprout and become a living food. ',
      ingredients:
        'Organic Sprouted Wheat, Organic Sprouted Barley, Organic Sprouted Millet, Organic Malted Barley, Organic Sprouted Lentils, Organic Sprouted Soybeans, Organic Sprouted Spelt, Filtered Water, Fresh Yeast, Sea Salt. ****This product is processed and packaged in a facility that also processes tree nuts.****',
      naturalOrganic: false,
      nationalLocal: false,
      glutenFree: false,
      dietitionsChoice: true,
      wholeGrain: true,
      lowSodium: false,
      heartHealthy: false,
      moreFuelPerUnit: 0.0,
      mealFlag: 'N',
      readyForYouFlag: 'N',
      productQTY1: null,
      productQTY2: null,
      productQTY3: null,
      inventoryCtrlCode: 10,
      articleId: null,
      hasNutritionString: null,
      notSignificantSource: null,
      quantityInCart: null,
      restrictionType: null,
      weightedFlag: 'N',
      nbrTimesOrdered: null,
      isInChart: false,
      jitAvailability: true,
      solrUniqueKey: '681882037',
      healthAttributeCode: [
        'LOW_CHOLESTEROL',
        'LOW_FAT',
        'LOW_SALT',
        'LOW_SATURATED_FAT',
        'LOW_SUGAR'
      ],
      area: ['Dough'],
      healthAttributeImage: [
        'Low or no cholesterol^health1.gif',
        'Low or no sodium^health2.gif',
        'Low or no fat^health3.gif',
        'Low or no saturated fat^health4.gif',
        'Low Sugar^lowsugar.jpg'
      ],
      restrictionId: [],
      attributes: null,
      upcList: ['73472001202'],
      iconImages: null,
      username: null,
      catalogArea: ['PRODUCTS_109964'],
      selection: [],
      sequence: [],
      keywords: ['Bread', ' Bread', ' Bread', ' Bread', ' Bread'],
      productAreaHierarchy: ['4433|109799|100096|109964'],
      randomWeightFlag: null,
      randomWeightLow: null,
      randomWeightHigh: null,
      randomWeightUnitCode: null,
      inventoryGroupName: null,
      controlledSubstanceCode: null,
      restricted: false,
      healthImages: [
        {
          altText: 'Low or no cholesterol',
          imageUrl: 'health1.gif'
        },
        {
          altText: 'Low or no sodium',
          imageUrl: 'health2.gif'
        },
        {
          altText: 'Low or no fat',
          imageUrl: 'health3.gif'
        },
        {
          altText: 'Low or no saturated fat',
          imageUrl: 'health4.gif'
        },
        {
          altText: 'Low Sugar',
          imageUrl: 'lowsugar.jpg'
        }
      ],
      quickSaleProduct: false,
      attributeImages: [],
      iconAttributeCode: [],
      sections: [{ id: 'wine-spirits', label: 'Wine & Spirits' }]
    },
    {
      productQTY1: '14',
      productQTY2: '15',
      productQTY3: '16',
      section: 'Wine & Spirits',
      price: 5.99,
      productId: '89112',
      facilityId: 2037,
      productName: 'Bake Shoppe Fresh Wholesome Harvest Bread',
      brand: 'Bake Shoppe Fresh                   ',
      status: 'Active',
      facilityStatus: 'Active',
      imagePath: '89112.jpg',
      sizeUom: 'OZ ',
      sizeString: '18 OZ',
      sizeNumber: 18.0,
      currentPrice: 3.99,
      normalPrice: 3.99,
      onSale: false,
      prodClass: 170,
      prodSubClass: 820,
      pickable: 1,
      webLifeCycle: 3,
      position: null,
      inventoryControlCode: '0',
      inventoryGroupId: null,
      inventoryGroupTypeCode: null,
      inventoryGroupDefaultDayQty: null,
      inventoryGroupLeadTime: null,
      prodDepartment: 'BAKERY',
      groupNumber: 2,
      staffPick: false,
      rankNotes: null,
      rankShortText: null,
      rankDescription: null,
      rankImage: null,
      rankTypeCode: null,
      salesRank: 999999999,
      coolInfo: null,
      promotionMsg: ' ',
      keywordsString: null,
      priceCondCode: 'Reg                 ',
      additionalSalesText: null,
      isNew: false,
      productDetails: 'Four Brothers Fresh Wholesome Harvest Bread ',
      ingredients:
        '473Whole Wheat Flour, Flour ((wheat flour enriched (Niacin, reduced iron, thiamine mononitrate, riboflavin, folic acid), malted barley flour)), Grain & Seed Base((wheat sourdough(water, fermented wheat flour), whole oat groats, dextrose, sunflower seeds, flax seed, millet, cracked wheat, sugar, dried honey powder, salt)), Soybean Oil, Sugar, Yeast, Rye Sourdough (water, fermented rye flour, salt), Sunflower Seeds, Flax Seed, sesame Seeds, Millet, Oats, Cracked Wheat, Salt, Vital Wheat Gluten, Dough Conditioner (wheat flour, malted barley flour, ascorbic acid, enzymes), Molasses, Enzyme (wheat flour, enzymes), Calcium Propionate (preservative). ***Warning: Contains: Wheat. Made in a facility that handles wheat, soy, milk, eggs, peanuts and tree nuts.***',
      naturalOrganic: false,
      nationalLocal: false,
      glutenFree: false,
      dietitionsChoice: true,
      wholeGrain: false,
      lowSodium: false,
      heartHealthy: false,
      moreFuelPerUnit: 0.0,
      mealFlag: 'N',
      readyForYouFlag: 'N',
      productQTY1: null,
      productQTY2: null,
      productQTY3: null,
      inventoryCtrlCode: 0,
      articleId: null,
      hasNutritionString: null,
      notSignificantSource: null,
      quantityInCart: null,
      restrictionType: null,
      weightedFlag: 'N',
      nbrTimesOrdered: null,
      isInChart: false,
      jitAvailability: true,
      solrUniqueKey: '891122037',
      healthAttributeCode: [
        'LOW_CHOLESTEROL',
        'LOW_SATURATED_FAT',
        'LOW_SUGAR'
      ],
      area: ['Breads'],
      healthAttributeImage: [
        'Low or no cholesterol^health1.gif',
        'Low Sugar^lowsugar.jpg',
        'Low or no saturated fat^health4.gif'
      ],
      restrictionId: [],
      attributes: null,
      upcList: ['733147204955'],
      iconImages: null,
      username: null,
      catalogArea: ['PRODUCTS_100010'],
      selection: [],
      sequence: [],
      keywords: ['Bread', ' Bread', ' Bread', ' Bread'],
      productAreaHierarchy: ['4433|109792|100010'],
      randomWeightFlag: null,
      randomWeightLow: null,
      randomWeightHigh: null,
      randomWeightUnitCode: null,
      inventoryGroupName: null,
      controlledSubstanceCode: null,
      restricted: false,
      healthImages: [
        {
          altText: 'Low or no cholesterol',
          imageUrl: 'health1.gif'
        },
        {
          altText: 'Low Sugar',
          imageUrl: 'lowsugar.jpg'
        },
        {
          altText: 'Low or no saturated fat',
          imageUrl: 'health4.gif'
        }
      ],
      quickSaleProduct: false,
      attributeImages: [],
      iconAttributeCode: [],
      sections: [{ id: 'wine-spirits', label: 'Wine & Spirits' }]
    },
    {
      productQTY1: '14',
      productQTY2: '15',
      productQTY3: '16',
      section: 'Grocery',
      price: 5.99,
      productId: '95436',
      facilityId: 2037,
      productName: 'Daves Killer Bread Powerseed Organic Bread',
      brand: "Dave's Killer Bread                 ",
      status: 'Active',
      facilityStatus: 'Active',
      imagePath: '95436.jpg',
      sizeUom: 'OZ ',
      sizeString: '25 OZ',
      sizeNumber: 25.0,
      currentPrice: 5.99,
      normalPrice: 5.99,
      onSale: false,
      prodClass: 91,
      prodSubClass: 81,
      pickable: 1,
      webLifeCycle: 3,
      position: null,
      inventoryControlCode: '0',
      inventoryGroupId: null,
      inventoryGroupTypeCode: null,
      inventoryGroupDefaultDayQty: null,
      inventoryGroupLeadTime: null,
      prodDepartment: 'GROCERY',
      groupNumber: 2,
      staffPick: false,
      rankNotes: null,
      rankShortText: null,
      rankDescription: null,
      rankImage: null,
      rankTypeCode: null,
      salesRank: 999999999,
      coolInfo: null,
      promotionMsg: ' ',
      keywordsString: null,
      priceCondCode: 'Reg',
      additionalSalesText: null,
      isNew: false,
      productDetails:
        'Sweetened only with organic fruit juices. Powerseed is lightly sweet and power-packed with fiber, protein and whole grain nutrition. Contains no high fructose corn syrup, artificial preservatives and artificial ingredients. A Certified USDA Organic and non GMO product.',
      ingredients:
        'Organic Whole Wheat (Organic Whole Wheat Flour, Organic Cracked Whole Wheat), Water, Powerseed Mix (Organic Whole Flax Seeds, Organic Ground Whole Flax Seeds, Organic Rolled Oats, Organic Sunflower Seeds, Organic Pumpkin Seeds, Organic Un-Hulled Brown Sesame Seeds, Organic Un-Hulled Black Sesame Seeds), Organic Wheat Gluten, Organic Fruit Juices (Organic Apple, Organic Pear, Organic Peach), Organic Oat Fiber, Sea Salt, Organic Cultured Whole Wheat, Yeast, Organic Vinegar. ***Warning: Contains: Wheat. Manufactured in a facility that uses tree nuts, dairy and soy.***',
      naturalOrganic: true,
      nationalLocal: false,
      glutenFree: false,
      dietitionsChoice: true,
      wholeGrain: true,
      lowSodium: false,
      heartHealthy: false,
      moreFuelPerUnit: 0.0,
      mealFlag: 'N',
      readyForYouFlag: 'N',
      productQTY1: null,
      productQTY2: null,
      productQTY3: null,
      inventoryCtrlCode: 0,
      articleId: null,
      hasNutritionString: null,
      notSignificantSource: null,
      quantityInCart: null,
      restrictionType: null,
      weightedFlag: 'N',
      nbrTimesOrdered: null,
      isInChart: false,
      jitAvailability: true,
      solrUniqueKey: '954362037',
      healthAttributeCode: [
        'LOW_CHOLESTEROL',
        'LOW_FAT',
        'LOW_SALT',
        'LOW_SATURATED_FAT',
        'LOW_SUGAR'
      ],
      area: ['Snack'],
      healthAttributeImage: [
        'Low or no cholesterol^health1.gif',
        'Low or no saturated fat^health4.gif',
        'Low or no sodium^health2.gif',
        'Low or no fat^health3.gif',
        'Low Sugar^lowsugar.jpg'
      ],
      restrictionId: [],
      attributes: null,
      upcList: ['13764027282'],
      iconImages: null,
      username: null,
      catalogArea: ['PRODUCTS_110267'],
      selection: [],
      sequence: [],
      keywords: ['Bread', ' Bread', ' Bread', ' Bread', ' Bread'],
      productAreaHierarchy: ['4433|109798|100163|110267'],
      randomWeightFlag: null,
      randomWeightLow: null,
      randomWeightHigh: null,
      randomWeightUnitCode: null,
      inventoryGroupName: null,
      controlledSubstanceCode: null,
      restricted: false,
      healthImages: [
        {
          altText: 'Low or no cholesterol',
          imageUrl: 'health1.gif'
        },
        {
          altText: 'Low or no saturated fat',
          imageUrl: 'health4.gif'
        },
        {
          altText: 'Low or no sodium',
          imageUrl: 'health2.gif'
        },
        {
          altText: 'Low or no fat',
          imageUrl: 'health3.gif'
        },
        {
          altText: 'Low Sugar',
          imageUrl: 'lowsugar.jpg'
        }
      ],
      quickSaleProduct: false,
      attributeImages: [],
      iconAttributeCode: [],
      sections: [{ id: 'groceries', label: 'Groceries' }]
    },
    {
      section: 'Grocery',
      price: 5.99,
      productId: '95435',
      facilityId: 2037,
      productName: 'Daves Killer Bread Organic 21 Whole Grains and Seeds Bread',
      brand: 'Daves Killer Bread Bread            ',
      status: 'Active',
      facilityStatus: 'Active',
      imagePath: '95435.jpg',
      sizeUom: 'OZ ',
      sizeString: '27 OZ',
      sizeNumber: 27.0,
      currentPrice: 5.99,
      normalPrice: 5.99,
      onSale: false,
      prodClass: 94,
      prodSubClass: 104,
      pickable: 1,
      webLifeCycle: 3,
      position: null,
      inventoryControlCode: '0',
      inventoryGroupId: null,
      inventoryGroupTypeCode: null,
      inventoryGroupDefaultDayQty: null,
      inventoryGroupLeadTime: null,
      prodDepartment: 'GROCERY',
      groupNumber: 2,
      staffPick: false,
      rankNotes: null,
      rankShortText: null,
      rankDescription: null,
      rankImage: null,
      rankTypeCode: null,
      salesRank: 999999999,
      coolInfo: null,
      promotionMsg: ' ',
      keywordsString: null,
      priceCondCode: 'Reg',
      additionalSalesText: null,
      isNew: false,
      productDetails:
        'With a hearty texture, subtle sweetness and a seed-coated crust, "21" is great for toast, sandwiches or even by itself. Made without high fructose corn syrup. Contains no artificial preservatives and artificial ingredients. Always: power-packed with whole grains, USDA organic, non-GMO and made with killer taste and texture.',
      ingredients:
        'Organic Whole Wheat (Organic Wholewheat Flour, Organic Cracked Whole Wheat), Water, 21 Whole Grains and Seeds Mix (Organic Whole Flax Seeds, Organic Sunflower Seeds, Organic Ground Whole Flax Seeds, Organic Un-Hulled Brown Sesame Seeds, Organic Triticale, Organic Pumpkin Seeds, Organic Rolled Barley, Organic Rolled Oats, Organic Rolled Rye, Organic Un-Hulled Black Sesame Seeds, Organic Millet, Organic Rolled Spelt, Organic Blue Cornmeal, Organic Brown Rice Flour, Organic Yellow Cornmeal, Organic Amaranth Flour, Organic Rolled Kamut Khorasan Wheat, Organic Quinoa, Organic Buckwheat Flour, Organic Sorghum Flour, Organic Poppy Seeds), Organic Dried Cane Syrup (Sugar), Organic Wheat Gluten, Organic Oat Fiber, Organic Molasses, Sea Salt, Organic Cultured Whole Wheat, Yeast, Organic Vinegar. ***Warning: Contains: Wheat. Manufactured in a facility that uses tree nuts, dairy and soy.***',
      naturalOrganic: true,
      nationalLocal: false,
      glutenFree: false,
      dietitionsChoice: true,
      wholeGrain: true,
      lowSodium: false,
      heartHealthy: false,
      moreFuelPerUnit: 0.0,
      mealFlag: 'N',
      readyForYouFlag: 'N',
      productQTY1: null,
      productQTY2: null,
      productQTY3: null,
      inventoryCtrlCode: 0,
      articleId: null,
      hasNutritionString: null,
      notSignificantSource: null,
      quantityInCart: null,
      restrictionType: null,
      weightedFlag: 'N',
      nbrTimesOrdered: null,
      isInChart: false,
      jitAvailability: true,
      solrUniqueKey: '954352037',
      healthAttributeCode: [
        'LOW_CHOLESTEROL',
        'LOW_FAT',
        'LOW_SATURATED_FAT',
        'LOW_SUGAR'
      ],
      area: ['Bread'],
      healthAttributeImage: [
        'Low Sugar^lowsugar.jpg',
        'Low or no cholesterol^health1.gif',
        'Low or no fat^health3.gif',
        'Low or no saturated fat^health4.gif'
      ],
      restrictionId: [],
      attributes: null,
      upcList: ['13764027053'],
      iconImages: null,
      username: null,
      catalogArea: ['PRODUCTS_100152'],
      selection: [],
      sequence: [],
      keywords: ['Bread', ' Bread', ' Bread', ' Bread', ' Bread'],
      productAreaHierarchy: ['4433|109798|100152'],
      randomWeightFlag: null,
      randomWeightLow: null,
      randomWeightHigh: null,
      randomWeightUnitCode: null,
      inventoryGroupName: null,
      controlledSubstanceCode: null,
      restricted: false,
      healthImages: [
        {
          altText: 'Low Sugar',
          imageUrl: 'lowsugar.jpg'
        },
        {
          altText: 'Low or no cholesterol',
          imageUrl: 'health1.gif'
        },
        {
          altText: 'Low or no fat',
          imageUrl: 'health3.gif'
        },
        {
          altText: 'Low or no saturated fat',
          imageUrl: 'health4.gif'
        }
      ],
      quickSaleProduct: false,
      attributeImages: [],
      iconAttributeCode: [],
      sections: [{ id: 'groceries', label: 'Groceries' }]
    },
    {
      section: 'Grocery',
      price: 16.99,
      productId: '898890',
      facilityId: 2037,
      productName: "That's Smart White Enriched Bread",
      brand: "That's Smart!                       ",
      status: 'Active',
      facilityStatus: 'Active',
      imagePath: '898890.jpg',
      sizeUom: 'OZ ',
      sizeString: '16 OZ',
      sizeNumber: 16.0,
      currentPrice: 0.99,
      normalPrice: 0.99,
      onSale: false,
      prodClass: 94,
      prodSubClass: 461,
      pickable: 1,
      webLifeCycle: 3,
      position: null,
      inventoryControlCode: '0',
      inventoryGroupId: null,
      inventoryGroupTypeCode: null,
      inventoryGroupDefaultDayQty: null,
      inventoryGroupLeadTime: null,
      prodDepartment: 'GROCERY',
      groupNumber: 2,
      staffPick: false,
      rankNotes: null,
      rankShortText: null,
      rankDescription: null,
      rankImage: null,
      rankTypeCode: null,
      salesRank: 999999999,
      coolInfo: null,
      promotionMsg: '',
      keywordsString: null,
      priceCondCode: 'Reg                 ',
      additionalSalesText: null,
      isNew: false,
      productDetails: null,
      ingredients: null,
      naturalOrganic: false,
      nationalLocal: false,
      glutenFree: false,
      dietitionsChoice: false,
      wholeGrain: false,
      lowSodium: false,
      heartHealthy: false,
      moreFuelPerUnit: 0.0,
      mealFlag: 'N',
      readyForYouFlag: 'N',
      productQTY1: null,
      productQTY2: null,
      productQTY3: null,
      inventoryCtrlCode: 0,
      articleId: null,
      hasNutritionString: null,
      notSignificantSource: null,
      quantityInCart: null,
      restrictionType: null,
      weightedFlag: 'N',
      nbrTimesOrdered: null,
      isInChart: false,
      jitAvailability: true,
      solrUniqueKey: '8988902037',
      healthAttributeCode: [],
      area: ['Breads'],
      healthAttributeImage: [],
      restrictionId: [],
      attributes: null,
      upcList: ['193476003047'],
      iconImages: null,
      username: null,
      catalogArea: ['PRODUCTS_100010'],
      selection: [],
      sequence: [],
      keywords: ['Bread', ' Bread', ' Bread', ' Bread', ' Bread'],
      productAreaHierarchy: ['4433|109792|100010'],
      randomWeightFlag: null,
      randomWeightLow: null,
      randomWeightHigh: null,
      randomWeightUnitCode: null,
      inventoryGroupName: null,
      controlledSubstanceCode: null,
      restricted: false,
      healthImages: [],
      quickSaleProduct: false,
      attributeImages: [],
      iconAttributeCode: [],
      sections: [{ id: 'groceries', label: 'Groceries' }]
    },
    {
      section: 'Grocery',
      price: 4.29,
      productId: '4458',
      facilityId: 2037,
      productName: 'Country Hearth Dakota Style 12-Grain Bread',
      brand: 'Country Hearth                      ',
      status: 'Active',
      facilityStatus: 'Active',
      imagePath: '4458.jpg',
      sizeUom: 'EA ',
      sizeString: '1 EA',
      sizeNumber: 1.0,
      currentPrice: 2.48,
      normalPrice: 4.29,
      onSale: true,
      prodClass: 94,
      prodSubClass: 104,
      pickable: 1,
      webLifeCycle: 3,
      position: null,
      inventoryControlCode: '0',
      inventoryGroupId: null,
      inventoryGroupTypeCode: null,
      inventoryGroupDefaultDayQty: null,
      inventoryGroupLeadTime: null,
      prodDepartment: 'GROCERY',
      groupNumber: 2,
      staffPick: false,
      rankNotes: null,
      rankShortText: null,
      rankDescription: null,
      rankImage: null,
      rankTypeCode: null,
      salesRank: 999999999,
      coolInfo: null,
      promotionMsg: ' ',
      keywordsString: null,
      priceCondCode: 'Ad                  ',
      additionalSalesText: null,
      isNew: false,
      productDetails:
        "Country Hearth Breads give you and your family a real variety, all with a pleasing texture that's not dry nor hard but still have the taste of good country cooking. Twelve delicious grains. Hearty, not heavy",
      ingredients: null,
      naturalOrganic: false,
      nationalLocal: false,
      glutenFree: false,
      dietitionsChoice: false,
      wholeGrain: false,
      lowSodium: false,
      heartHealthy: false,
      moreFuelPerUnit: 0.0,
      mealFlag: 'N',
      readyForYouFlag: 'N',
      productQTY1: null,
      productQTY2: null,
      productQTY3: null,
      inventoryCtrlCode: 0,
      articleId: null,
      hasNutritionString: null,
      notSignificantSource: null,
      quantityInCart: null,
      restrictionType: null,
      weightedFlag: 'N',
      nbrTimesOrdered: null,
      isInChart: false,
      jitAvailability: true,
      solrUniqueKey: '44582037',
      healthAttributeCode: [
        'LOW_CHOLESTEROL',
        'LOW_FAT',
        'LOW_SATURATED_FAT',
        'LOW_SUGAR'
      ],
      area: ['Advertised Specials', 'Bread'],
      healthAttributeImage: [
        'Low or no fat^health3.gif',
        'Low or no cholesterol^health1.gif',
        'Low or no saturated fat^health4.gif',
        'Low Sugar^lowsugar.jpg'
      ],
      restrictionId: [],
      attributes: null,
      upcList: ['76057018091'],
      iconImages: null,
      username: null,
      catalogArea: ['LISTS_102188', 'PRODUCTS_100152'],
      selection: [],
      sequence: [],
      keywords: ['Bread', ' Bread', ' Bread', ' Bread', ' Bread'],
      productAreaHierarchy: ['4433|109798|100152'],
      randomWeightFlag: null,
      randomWeightLow: null,
      randomWeightHigh: null,
      randomWeightUnitCode: null,
      inventoryGroupName: null,
      controlledSubstanceCode: null,
      restricted: false,
      healthImages: [
        {
          altText: 'Low or no fat',
          imageUrl: 'health3.gif'
        },
        {
          altText: 'Low or no cholesterol',
          imageUrl: 'health1.gif'
        },
        {
          altText: 'Low or no saturated fat',
          imageUrl: 'health4.gif'
        },
        {
          altText: 'Low Sugar',
          imageUrl: 'lowsugar.jpg'
        }
      ],
      quickSaleProduct: false,
      attributeImages: [],
      iconAttributeCode: [],
      sections: [{ id: 'groceries', label: 'Groceries' }]
    },
    {
      section: 'Wine & Spirits',
      price: 5.99,
      productId: '68188',
      facilityId: 2037,
      productName: 'Food For Life Ezekiel 4:9 Sprouted 100% Whole Grain Bread',
      brand: 'Food For Life                       ',
      status: 'Active',
      facilityStatus: 'Active',
      imagePath: '68188.jpg',
      sizeUom: 'OZ ',
      sizeString: '24 OZ',
      sizeNumber: 24.0,
      currentPrice: 5.19,
      normalPrice: 5.49,
      onSale: true,
      prodClass: 143,
      prodSubClass: 201,
      pickable: 1,
      webLifeCycle: 3,
      position: null,
      inventoryControlCode: '10',
      inventoryGroupId: null,
      inventoryGroupTypeCode: null,
      inventoryGroupDefaultDayQty: null,
      inventoryGroupLeadTime: null,
      prodDepartment: 'FROZEN',
      groupNumber: 2,
      staffPick: false,
      rankNotes: null,
      rankShortText: null,
      rankDescription: null,
      rankImage: null,
      rankTypeCode: null,
      salesRank: 999999999,
      coolInfo: null,
      promotionMsg: ' ',
      keywordsString: null,
      priceCondCode: 'TLP                 ',
      additionalSalesText: null,
      isNew: false,
      productDetails:
        'The original flourless low glycemic. As described in the holy scripture verse. All natural. No preservatives. Certified organic grains. The live grain difference! Complete protein. No trans fat. The miracle of the sprouts. Different from most breads today, this unique bread is made from freshly sprouted live grains and contains absolutely no flour. We believe in sprouting the grains we use in our breads because sprouting is the best way to release all of the vital nutrients stored in whole grains. To unlock this dormant food energy, maximize nutrition and flavor, we add just the right amount of water to healthy whole organically grown grains which are already bursting with nutrients. Beneficial enzymes are activated which cause the grains to sprout and become a living food. ',
      ingredients:
        'Organic Sprouted Wheat, Organic Sprouted Barley, Organic Sprouted Millet, Organic Malted Barley, Organic Sprouted Lentils, Organic Sprouted Soybeans, Organic Sprouted Spelt, Filtered Water, Fresh Yeast, Sea Salt. ****This product is processed and packaged in a facility that also processes tree nuts.****',
      naturalOrganic: false,
      nationalLocal: false,
      glutenFree: false,
      dietitionsChoice: true,
      wholeGrain: true,
      lowSodium: false,
      heartHealthy: false,
      moreFuelPerUnit: 0.0,
      mealFlag: 'N',
      readyForYouFlag: 'N',
      productQTY1: null,
      productQTY2: null,
      productQTY3: null,
      inventoryCtrlCode: 10,
      articleId: null,
      hasNutritionString: null,
      notSignificantSource: null,
      quantityInCart: null,
      restrictionType: null,
      weightedFlag: 'N',
      nbrTimesOrdered: null,
      isInChart: false,
      jitAvailability: true,
      solrUniqueKey: '681882037',
      healthAttributeCode: [
        'LOW_CHOLESTEROL',
        'LOW_FAT',
        'LOW_SALT',
        'LOW_SATURATED_FAT',
        'LOW_SUGAR'
      ],
      area: ['Dough'],
      healthAttributeImage: [
        'Low or no cholesterol^health1.gif',
        'Low or no sodium^health2.gif',
        'Low or no fat^health3.gif',
        'Low or no saturated fat^health4.gif',
        'Low Sugar^lowsugar.jpg'
      ],
      restrictionId: [],
      attributes: null,
      upcList: ['73472001202'],
      iconImages: null,
      username: null,
      catalogArea: ['PRODUCTS_109964'],
      selection: [],
      sequence: [],
      keywords: ['Bread', ' Bread', ' Bread', ' Bread', ' Bread'],
      productAreaHierarchy: ['4433|109799|100096|109964'],
      randomWeightFlag: null,
      randomWeightLow: null,
      randomWeightHigh: null,
      randomWeightUnitCode: null,
      inventoryGroupName: null,
      controlledSubstanceCode: null,
      restricted: false,
      healthImages: [
        {
          altText: 'Low or no cholesterol',
          imageUrl: 'health1.gif'
        },
        {
          altText: 'Low or no sodium',
          imageUrl: 'health2.gif'
        },
        {
          altText: 'Low or no fat',
          imageUrl: 'health3.gif'
        },
        {
          altText: 'Low or no saturated fat',
          imageUrl: 'health4.gif'
        },
        {
          altText: 'Low Sugar',
          imageUrl: 'lowsugar.jpg'
        }
      ],
      quickSaleProduct: false,
      attributeImages: [],
      iconAttributeCode: [],
      sections: [{ id: 'wine-spirits', label: 'Wine & Spirits' }]
    },
    {
      productQTY1: '14',
      productQTY2: '15',
      productQTY3: '16',
      section: 'Wine & Spirits',
      price: 5.99,
      productId: '89112',
      facilityId: 2037,
      productName: 'Bake Shoppe Fresh Wholesome Harvest Bread',
      brand: 'Bake Shoppe Fresh                   ',
      status: 'Active',
      facilityStatus: 'Active',
      imagePath: '89112.jpg',
      sizeUom: 'OZ ',
      sizeString: '18 OZ',
      sizeNumber: 18.0,
      currentPrice: 3.99,
      normalPrice: 3.99,
      onSale: false,
      prodClass: 170,
      prodSubClass: 820,
      pickable: 1,
      webLifeCycle: 3,
      position: null,
      inventoryControlCode: '0',
      inventoryGroupId: null,
      inventoryGroupTypeCode: null,
      inventoryGroupDefaultDayQty: null,
      inventoryGroupLeadTime: null,
      prodDepartment: 'BAKERY',
      groupNumber: 2,
      staffPick: false,
      rankNotes: null,
      rankShortText: null,
      rankDescription: null,
      rankImage: null,
      rankTypeCode: null,
      salesRank: 999999999,
      coolInfo: null,
      promotionMsg: ' ',
      keywordsString: null,
      priceCondCode: 'Reg                 ',
      additionalSalesText: null,
      isNew: false,
      productDetails: 'Four Brothers Fresh Wholesome Harvest Bread ',
      ingredients:
        '473Whole Wheat Flour, Flour ((wheat flour enriched (Niacin, reduced iron, thiamine mononitrate, riboflavin, folic acid), malted barley flour)), Grain & Seed Base((wheat sourdough(water, fermented wheat flour), whole oat groats, dextrose, sunflower seeds, flax seed, millet, cracked wheat, sugar, dried honey powder, salt)), Soybean Oil, Sugar, Yeast, Rye Sourdough (water, fermented rye flour, salt), Sunflower Seeds, Flax Seed, sesame Seeds, Millet, Oats, Cracked Wheat, Salt, Vital Wheat Gluten, Dough Conditioner (wheat flour, malted barley flour, ascorbic acid, enzymes), Molasses, Enzyme (wheat flour, enzymes), Calcium Propionate (preservative). ***Warning: Contains: Wheat. Made in a facility that handles wheat, soy, milk, eggs, peanuts and tree nuts.***',
      naturalOrganic: false,
      nationalLocal: false,
      glutenFree: false,
      dietitionsChoice: true,
      wholeGrain: false,
      lowSodium: false,
      heartHealthy: false,
      moreFuelPerUnit: 0.0,
      mealFlag: 'N',
      readyForYouFlag: 'N',
      productQTY1: null,
      productQTY2: null,
      productQTY3: null,
      inventoryCtrlCode: 0,
      articleId: null,
      hasNutritionString: null,
      notSignificantSource: null,
      quantityInCart: null,
      restrictionType: null,
      weightedFlag: 'N',
      nbrTimesOrdered: null,
      isInChart: false,
      jitAvailability: true,
      solrUniqueKey: '891122037',
      healthAttributeCode: [
        'LOW_CHOLESTEROL',
        'LOW_SATURATED_FAT',
        'LOW_SUGAR'
      ],
      area: ['Breads'],
      healthAttributeImage: [
        'Low or no cholesterol^health1.gif',
        'Low Sugar^lowsugar.jpg',
        'Low or no saturated fat^health4.gif'
      ],
      restrictionId: [],
      attributes: null,
      upcList: ['733147204955'],
      iconImages: null,
      username: null,
      catalogArea: ['PRODUCTS_100010'],
      selection: [],
      sequence: [],
      keywords: ['Bread', ' Bread', ' Bread', ' Bread'],
      productAreaHierarchy: ['4433|109792|100010'],
      randomWeightFlag: null,
      randomWeightLow: null,
      randomWeightHigh: null,
      randomWeightUnitCode: null,
      inventoryGroupName: null,
      controlledSubstanceCode: null,
      restricted: false,
      healthImages: [
        {
          altText: 'Low or no cholesterol',
          imageUrl: 'health1.gif'
        },
        {
          altText: 'Low Sugar',
          imageUrl: 'lowsugar.jpg'
        },
        {
          altText: 'Low or no saturated fat',
          imageUrl: 'health4.gif'
        }
      ],
      quickSaleProduct: false,
      attributeImages: [],
      iconAttributeCode: [],
      sections: [{ id: 'wine-spirits', label: 'Wine & Spirits' }]
    }
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});
  const [listItems, setlistItems] = useState([]);
  const {
    state: { cart, counter, total, qty },
    dispatch
  } = CartState();
  const onClose = (event) => {
    setIsOpen(false);
  };
  const onClose1 = (event) => {
    setIsOpen(false);
  };
  const openModal = (item) => {
    console.log(item);
    setData(item);
    // console.log(data)
    setIsOpen(true);
  };
  console.log(cart);
  const handleDecrementClick = () => {
    if (value > 1) {
      setValue((value) => parseInt(value - 1));
    }
  };

  const handleIncrementClick = () => {
    setValue((value) => parseInt(value + 1));
  };
  const onFormSubmit = () => {
    navigate('/Checkout');
  };
  // const addtocartapi = () => {
  //   //do something
  //   dispatch({ type: 'ADD_TO_CART', payload: item, qty: item.qty + quantity });
  // };
  // const [Images1] = React.useState(images);
  return (
    <div className="wrapper">
      <div className="s-checkout__top mbot-1">
        <div className="container">
          <div className="b-step justify-center d-flex">
            <a href="loginMessage" className="checkout-logo"></a>
            <span className="b-step__title">Checkout - Review Cart</span>
            <span className="b-step__count">1</span>
            <span className="l-steps__count">2</span>
            <span className="l-steps__count">3</span>
          </div>
        </div>
      </div>
      <div className="b-delivery">
        <div className="col-wrap">
          <div className="col3">
            <div className="b-delivery__title">Delivery time</div>
            <div>
              <a href="changewindowfromcheckout" className="btn-a">
                Change
              </a>
              {/* onClick="skipLeaveMessageWindow();" */}
            </div>
          </div>
          <div className="col3">
            <div className="b-delivery__date">Mon, May 23</div>
            <div className="b-delivery__time">1PM-2PM</div>
          </div>
          <div className="col3">
            <dt className="b-delivery__dt">Time until order deadline</dt>
            <dd className="b-delivery__dd">
              <div id="defaultCountdown"></div>
            </dd>
          </div>
        </div>
      </div>
      <div className="b-carousel">
        <div className="b-carousel__top">
          <div className="b-carousel__title-wrap">
            <div className="b-carousel__title">Did you forget?</div>
            <div className="b-carousel__subtitle">
              You usually include these items in your order. Would you like to
              add them now?
            </div>
          </div>
        </div>
        <div>
          <div style={{ height: '200px' }}>
            <div style={{ width: '100%', alignContent: 'center' }}>
              <ScrollMenu
                LeftArrow={LeftArrow}
                RightArrow={RightArrow}
                options={{
                  ratio: 0.9,

                  rootMargin: '5px',

                  threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1]
                }}
              >
                {mockData.map((item, id) => (
                  <Card
                    item={item}
                    title={id}
                    itemId={id} // NOTE: itemId is required for track items
                    key={id}
                    // onClick={() => openModal(item)}
                    // onClick={() => navigate('/Details')}
                  />
                ))}
              </ScrollMenu>
            </div>
          </div>

          {/* <MyModal isOpen={isOpen} onClose={onClose1} data={data} /> */}
        </div>
      </div>
      <div className="b-carousel _bb">
        <div className="b-carousel__top">
          <div className="b-carousel__title-wrap">
            <div className="b-carousel__title">Before you go...</div>
            <div className="b-carousel__subtitle">
              You might be interested in these products.
            </div>
          </div>
        </div>
        <div>
          <div style={{ height: '200px' }}>
            <div style={{ width: '100%', alignContent: 'center' }}>
              <ScrollMenu
                LeftArrow={LeftArrow}
                RightArrow={RightArrow}
                options={{
                  ratio: 0.9,

                  rootMargin: '5px',

                  threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1]
                }}
              >
                {mockData.map((item, id) => (
                  <Card
                    item={item}
                    title={id}
                    itemId={id} // NOTE: itemId is required for track items
                    key={id}
                    // onClick={() => openModal(item)}
                    // onClick={() => navigate('/Details')}
                  />
                ))}
              </ScrollMenu>
            </div>
          </div>

          {/* <MyModal isOpen={isOpen} onClose={onClose} data={data} /> */}
        </div>
      </div>
      <div className="f-basket__layout-a">
        <div className="_text-align-right flr purpleButton">
          <a className="i-question _step1" onClick="void(0)">
            <div className="i-question__text">
              <b>Need Help?</b>Phone 1 (844) 414-7467
            </div>
          </a>
          <a
            href="loginMessage"
            className="i-back _step1"
            // onClick="skipLeaveMessageWindow();"
          >
            <div className="i-back__text">
              <b>Return to Shopping</b>
            </div>
          </a>
        </div>
        <div className="f-basket__layout-a-table">
          <div className="f-basket__layout-a-left">
            <div className="f-basket__title">Your Cart</div>
          </div>
          <div className="f-basket__layout-a-right">
            <div className="f-basket__total-price">
              Total* <span id="totalOnTop">$20.88</span>
            </div>
          </div>
        </div>
      </div>
      <div className="crtTbleSec">
        <table>
          <thead>
            <tr>
              <th>Qty</th>
              <th>Item</th>
              <th>Each</th>
              <th>Item Total</th>
              <th>
                Mfr. Coupon
                <div className="i-question _grey" onClick="void(0)">
                  <div className="i-question__text">
                    We accept manufacturer coupons. Please enter the dollar
                    value next to the item and select apply.
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5}>
                {cart.map((val, key) => {
                  return (
                    <div key={key}>
                      <table>
                        <tr>
                          <td colSpan={5} className="crtDepartment">
                            {val.section}
                            {/* BAKERY */}
                          </td>
                        </tr>
                        <tr className="grey">
                          <td>
                            <div className="flex">
                              <div className="f-count">
                                <a
                                  className="f-count__minus"
                                  onClick={() => {
                                    handleDecrementClick();
                                    dispatch({
                                      type: 'DECREASE_ITEM_QTY',
                                      payload: val,
                                      qty: val.qty
                                    });
                                  }}
                                ></a>
                                <input
                                  type="tel"
                                  value={val.qty}
                                  className="positive-integer f-count__field"
                                  size="3"
                                  maxLength="3"
                                  id="amount903467"
                                  name="amount903467"
                                  onKeyUp="setNewQuantity(903467, true)"
                                />
                                <a
                                  className="f-count__plus"
                                  onClick={() => {
                                    handleIncrementClick();
                                    dispatch({
                                      type: 'INCREASE_ITEM_QTY',
                                      payload: val,
                                      qty: val.qty
                                    });
                                  }}
                                ></a>
                              </div>
                              <a
                                // href="#"
                                className="i-delete i_delete_desktop"
                                onClick={() =>
                                  dispatch({
                                    type: 'REMOVE_FROM_CART',
                                    payload: val
                                  })
                                }
                                // onClick="deleteProduct(903467, '-1.0'); return false;"
                              >
                                <span className="i_delete_text">Delete</span>
                              </a>
                            </div>
                          </td>
                          <td>
                            <div className="itmSec">
                              <div className="itmImg">
                                <img
                                  className="productImage"
                                  src={`https://cdn1.cobornsinc.com/cdwebimages/100x100/${val.imagePath}`}
                                  width="50"
                                  height="50"
                                  alt=""
                                />
                              </div>
                              <div className="itmImgRight">
                                <div className="itmImgRightTp">
                                  {val.productName}
                                  {/* Bake Shoppe Fresh 3X3 Chocolate Iced Cake Chocolat */}
                                </div>
                                <div className="itmImgRightBt">
                                  <div className="itmImgRightBtLft">
                                    <span>
                                      #{val.productId}
                                      {/* #903467 */}
                                    </span>
                                    <span>
                                      {val.sizeString}
                                      {/* 1 EA */}
                                    </span>
                                  </div>
                                  <div className="itmImgRightBtRt">EBT</div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>${val.price}</td>
                          <td>${val.currentPrice}</td>
                          <td></td>
                        </tr>
                      </table>
                    </div>
                  );
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="f-basket__layout-c">
        <div id="optInPromotions" v>
          <div id="promoHeader" className="f-basket__layout-c-top f-apply ">
            <div className="f-basket__text f-apply__label">
              <b>PROMOTIONS</b>
            </div>
            <div className="f-basket__text">
              The following promotions have been automatically applied to your
              order.
            </div>
          </div>
          <div className="f-basket__layout-c-middle">
            <div className="f-basket__dl">
              <div className="optInPromos" id="optInPromoContainer"></div>
              <div className="promo"></div>
            </div>
          </div>

          <div className="f-basket__layout-c-middle f-apply ">
            <div className="f-apply__error-msg"></div>
          </div>
        </div>
        <div id="optInMessages">
          <div id="promocodemessage"></div>
        </div>
        <div id="promoCodeCertificates" className="">
          <div>
            <div className="f-apply _promo ">
              <label for="promocode" className="f-apply__label">
                Enter Promo Codes/Gift Certificates, separated by commas:
              </label>
              <div className="f-apply__wrap">
                <input
                  id="promocode"
                  type="text"
                  placeholder="Enter codes or certificates and click apply"
                  className="f-apply__field"
                />
                <button
                  type="button"
                  className="f-apply__submit"
                  // onClick={acceptPromos}
                >
                  Apply
                </button>
              </div>
              <div className="f-apply__error-msg">
                Codes/Gift Certificates are not applied.
                <span>
                  Please check if codes or certificates entered are correct.
                </span>
              </div>
            </div>
          </div>
          <div id="applyStoreCreditDiv" className="f-apply _store-credit">
            <input type="hidden" id="totalCredit" value="0.0" />
            <input
              type="hidden"
              name="authorizedAmount"
              id="authorizedAmount"
              value="0.00"
            />
            <label for="storecredit" className="f-apply__label">
              Store Credit ($0.00 available):
            </label>
            <div className="f-apply__wrap">
              <input
                id="storecredit"
                type="text"
                placeholder="$0.00"
                className="f-apply__field"
                value="0.00"
              />
              <button
                className="f-apply__submit"
                // onClick="applyStoreCredit(); return false;"
              >
                Apply
              </button>
            </div>
            <div className="f-apply__error-msg">
              Store Credit was not applied.
              <span>
                Please check that the amount entered does not exceed available
                credit.
              </span>
            </div>
          </div>

          <div style={{ display: 'none' }}>
            <div className="f-basket__lf_margin"></div>
            <div className="f-basket__layout-c-bottom">
              <div id="lunchOrderDiv" className="f-apply _store-credit">
                <div className="f-apply__label_lf">
                  <span className="f-basket__lf_label">Lunch order.</span>
                  <div className="i-question _grey">
                    <div className="i-question__text">
                      Check the box for guaranteed lunch delivery by 12pm.
                    </div>
                  </div>
                </div>

                <label className="f-order-summ__label f-lunch-flag__label">
                  Yes,this order is for lunch.
                  <input
                    type="checkbox"
                    id="lunchOrderCheckBoxId"
                    name="lunchOrderCheckBoxId"
                  />
                  <div className="f-order-summ__label-box f-lunch-flag__label-box"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="f-basket__layout-d">
        <dl className="b-total">
          <div className="b-total__row">
            <dt className="b-total__dt">
              <b>Subtotal</b>
            </dt>
            <input type="hidden" id="subTotalValue" value="24.76" />
            <dd
              className="b-total__dd"
              id="subTotal"
              style={{ fontWeight: 'bold' }}
            >
              $24.76
            </dd>
          </div>
          <div className="b-total__row">
            <dt className="b-total__dt disc-padding">Manufacturer's Coupons</dt>
            <input id="cpnTotalValue" type="hidden" value="0.0" />
            <dd className="b-total__dd copy-red disc-margin" id="couponTotal">
              ($0.00)
            </dd>
          </div>
          <div className="b-total__row">
            <dt className="b-total__dt disc-padding">
              Coborn's Promo Code Discounts
            </dt>
            <input id="promoTotalValue" type="hidden" value="0.0" />
            <dd className="b-total__dd copy-red disc-margin">($0.00)</dd>
          </div>
          <div className="b-total__row">
            <dt className="b-total__dt disc-padding">Store Credit Applied</dt>
            <dd
              className="b-total__dd copy-red disc-margin"
              id="availedStoreCreditValue"
            >
              ($0.00)
            </dd>
            <input
              type="hidden"
              value="0.0"
              id="availedStoreCredit"
              name="availedStoreCredit"
            />
          </div>

          <div className="b-total__row notBanner1">
            <dt className="b-total__dt">Shopping Fee</dt>
            <dd className="b-total__dd">$5.00</dd>
          </div>
          <div className="b-total__row">
            <dt className="b-total__dt">Pick Up Fee</dt>
            <dd className="b-total__dd">
              <span id="deliveryFee"> $0.00</span>
            </dd>
          </div>
          <div
            className="b-total__row"
            id="deliveryFeeDiscountRow"
            style={{ display: 'none' }}
          >
            <dt className="b-total__dt disc-padding">Delivery Fee Discounts</dt>
            <dd
              className="b-total__dd copy-red disc-margin"
              id="deliveryFeeDiscount"
            >
              ($0.00)
            </dd>
          </div>
        </dl>
      </div>
      <div className="f-basket__layout-e">
        <div className="f-basket__layout-e-table mbtm-2">
          <div className="f-basket__layout-e-left">&nbsp;</div>
          <div className="f-basket__layout-e-right">
            <span className="f-basket__total _fl">Total*</span>
            <span className="f-basket__total" id="totalValue">
              $29.76
            </span>
            <input type="hidden" id="cartTotal" value="29.76" />
          </div>
        </div>
        <div className="f-basket__layout-e-table notBanner1">
          <div className="f-basket__layout-e-right">
            <label
              className="f-review-accept_substitution_label f-basket__text"
              for="acceptSubstitutions"
            >
              Accept Substitutions:
            </label>
            <label className="f-review-substitution__input accept_substitution">
              <input
                type="checkbox"
                id="acceptSubstitutions"
                name="acceptSubstitutions"
                checked=""
              />
              <div className="f-review-substitution__checkbox"></div>
            </label>
          </div>
        </div>
        <div className="f-basket__layout-e-table">
          <div className="f-basket__layout-e-right">
            <div className="f-basket__cf" style={{ marginBottom: '10px' }}>
              <span className="f-basket__text">EBT eligible expenses:</span>
              <span className="f-basket__text ib" id="ebtEligibleExpenses">
                $24.76
              </span>
              <input
                id="ebtEligibleExpensesValue"
                type="hidden"
                value="24.76"
              />
            </div>
          </div>
        </div>
        <div className="f-basket__layout-e-table">
          <div className=".f-basket__layout-e-right-instr">
            <label className="f-review-substitution__input notBanner1">
              <span className="f-basket__text">
                Special Shopping Instructions:
              </span>
              <textarea
                rows="3"
                cols="70"
                id="specialShoppingInstructions"
                name="specialShoppingInstructions"
                onKeyUp="saveShoppingInstructions()"
                maxLength="255"
              ></textarea>
            </label>
          </div>
        </div>
        <div className="f-basket__layout-e-table">
          <div className="f-basket__layout-e-left">
            <div className="f-basket__text _fz12">
              *Tax calculated at&nbsp;Step 2 - Review Information
            </div>
          </div>
          <div className="f-basket__layout-e-right">
            <input
              type="button"
              value="Continue"
              className="btn-d"
              onClick={onFormSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
CartList.propTypes = {
  defaultValue: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  item: PropTypes.object
};

CartList.defaultProps = {
  defaultValue: 1,
  disabled: false
};
