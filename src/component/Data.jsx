import female1 from '../assets/image/women-1.jpg';
import female2 from '../assets/image/women-2.png';
import female3 from '../assets/image/women-3.png';
import female4 from '../assets/image/women-4.png';
import female5 from '../assets/image/women-5.png';
import female6 from '../assets/image/kid-4.png';
import female7 from '../assets/image/kid-5.png';
import female8 from '../assets/image/kid-6.png';
import male1 from '../assets/image/kid-1.webp';
import male2 from '../assets/image/kid-2.jpeg';
import male3 from '../assets/image/kid-3.jpeg';
import male4 from '../assets/image/male-1.jpeg';
import male5 from '../assets/image/male-2.jpeg';
import male6 from '../assets/image/male-3.webp';
import male7 from '../assets/image/male-4.png';
import male8 from '../assets/image/male-5.webp';

const clothData = [
    {
        id: 1,
        name: 'Blouse and belted skirt',
        gender: 'Female',
        age: 'Ranges',
        price: 'N8,900,000',
        image: female2,
        description: 'Elegant blouse with a stylish belted skirt.',
        availableSizes: [ 'M,', 'L'],
        colorOptions: ['Blue', 'White'],
        rating: 4.5,
        location:'Nation wide',
        publisheddate :'1/9/2022',
        additionalinformation:'Lorem ipsum dolor sit amet consectetur. Auctor enim semper egestas felis metus volutpat cursus tortor. Sit.',
        storenumber: '56hp90',
    },
    {
        id: 2,
        name: 'Pink ankara mixed gown',
        gender: 'Female',
        age: '0 - 11',
        price: 'N8,100,000',
        image: female6,
        description: 'Beautiful pink gown with ankara mix.',
        availableSizes: ['XS,', 'M,', 'L'],
        colorOptions: ['Pink', 'Yellow'],
        rating: 4.2,
        location:'Nation wide',
        publisheddate :'4/9/2022',
        additionalinformation:'Lorem ipsum dolor sit amet consectetur. Auctor enim semper egestas felis metus volutpat cursus tortor. Sit.',
        storenumber: '56hp91',
    },
    {
        id: 3,
        name: 'A-shaped gown',
        gender: 'Female',
        age: 'Ranges',
        price: 'N8,900,000',
        image: female7,
        description: 'Stylish A-shaped gown for any occasion.',
        availableSizes: ['S,', 'M,','XL'],
        colorOptions: ['Red', 'Green'],
        rating: 4.8,
        location:'Nation wide',
        publisheddate :'8/9/2022',
        additionalinformation:'Lorem ipsum dolor sit amet consectetur. Auctor enim semper egestas felis metus volutpat cursus tortor. Sit.',
        storenumber: '56hp92',
    },
    {
        id: 4,
        name: 'Blouse and belted skirt',
        gender: 'Female',
        age: 'Ranges',
        price: 'N8,900,000',
        image: female3,
        description: 'Trendy blouse paired with a belted skirt.',
        availableSizes: ['S,', 'M,', 'L'],
        colorOptions: ['Black', 'Gray'],
        rating: 4.6,
        location:'Nation wide',
        publisheddate :'12/9/2022',
        additionalinformation:'Lorem ipsum dolor sit amet consectetur. Auctor enim semper egestas felis metus volutpat cursus tortor. Sit.',
        storenumber: '56hp93',
    },
    {
        id: 5,
        name: 'Ankara suit',
        gender: 'Male',
        age: 'Ranges',
        price: 'N9,000,000',
        image: female4,
        description: 'Traditional ankara suit with modern touches.',
        availableSizes: ['M,', 'L,', 'XL'],
        colorOptions: ['Blue', 'Brown'],
        rating: 4.3,
        location:'Nation wide',
        publisheddate :'16/8/2022',
        additionalinformation:'Lorem ipsum dolor sit amet consectetur. Auctor enim semper egestas felis metus volutpat cursus tortor. Sit.',
        storenumber: '56hp77',
    },
    {
        id: 6,
        name: 'Brown ball gown',
        gender: 'Female',
        age: '0 - 11',
        price: 'N8,500,000',
        image: female8,
        description: 'Charming brown ball gown for little girls.',
        availableSizes: ['XS,', 'S,', 'M'],
        colorOptions: ['Brown', 'Beige'],
        rating: 4.7,
        location:'Nation wide',
        publisheddate :'24/8/2022',
        additionalinformation:'Lorem ipsum dolor sit amet consectetur. Auctor enim semper egestas felis metus volutpat cursus tortor. Sit.',
        storenumber: '56hp79',
    },
    {
        id: 7,
        name: 'Male Suit',
        gender: 'Male',
        age: 'Ranges',
        price: 'N9,000,000',
        image: male7,
        description: 'Sharp and sophisticated male suit.',
        availableSizes: ['M,', 'L,', 'XL'],
        colorOptions: ['Black', 'Navy'],
        rating: 4.4,
        location:'Nation wide',
        publisheddate :'16/11/2022',
        additionalinformation:'Lorem ipsum dolor sit amet consectetur. Auctor enim semper egestas felis metus volutpat cursus tortor. Sit.',
        storenumber: '56hp90',
    },
    {
        id: 8,
        name: 'Flared gown',
        gender: 'Female',
        age: 'Ranges',
        price: 'N8,900,000',
        image: female5,
        description: 'Elegant flared gown for special occasions.',
        availableSizes: ['S,', 'M,', 'L,', 'XL'],
        colorOptions: ['Red', 'Blue'],
        rating: 4.5,
        location:'Nation wide',
        publisheddate :'15/10/2022',
        additionalinformation:'Lorem ipsum dolor sit amet consectetur. Auctor enim semper egestas felis metus volutpat cursus tortor. Sit.',
        storenumber: '56hp96',
    },
    {
        id: 9,
        name: 'Jacket cotton jeans',
        gender: 'Male',
        age: '0-11',
        price: 'N8,000,000',
        image: male3,
        description: 'Casual jacket with comfortable cotton jeans.',
        availableSizes: ['XS,', 'S,', 'M'],
        colorOptions: ['Blue', 'Black'],
        rating: 4.1,
        location:'Nation wide',
        publisheddate :'16/10/2022',
        additionalinformation:'Lorem ipsum dolor sit amet consectetur. Auctor enim semper egestas felis metus volutpat cursus tortor. Sit.',
        storenumber: '56hp100',
    },
    {
        id: 10,
        name: 'Male Suit',
        gender: 'Male',
        age: 'Ranges',
        price: 'N8,900,000',
        image: male4,
        description: 'Classic male suit for formal events.',
        availableSizes: ['M,', 'L,', 'XL'],
        colorOptions: ['Gray', 'Black'],
        rating: 4.5,
        location:'Nation wide',
        publisheddate :'26/10/2022',
        additionalinformation:'Lorem ipsum dolor sit amet consectetur. Auctor enim semper egestas felis metus volutpat cursus tortor. Sit.',
        storenumber: '56hp98',
    },
    {
        id: 11,
        name: 'Male Suit',
        gender: 'Male',
        age: 'Ranges',
        price: 'N9,100,000',
        image: male5,
        description: 'Elegant and stylish male suit.',
        availableSizes: ['L,', 'XL,'],
        colorOptions: ['Black', 'Blue'],
        rating: 4.6,
        location:'Nation wide',
        publisheddate :'4/11/2022',
        additionalinformation:'Lorem ipsum dolor sit amet consectetur. Auctor enim semper egestas felis metus volutpat cursus tortor. Sit.',
        storenumber: '56hp101',
    },
    {
        id: 12,
        name: 'Male Suit',
        gender: 'Male',
        age: 'Ranges',
        price: 'N9,100,000',
        image: male6,
        description: 'Modern male suit with a sleek design.',
        availableSizes: ['M,', 'L,' , 'XL'],
        colorOptions: ['Gray', 'Navy'],
        rating: 4.7,
        location:'Nation wide',
        publisheddate :'1/12/2022',
        additionalinformation:'Lorem ipsum dolor sit amet consectetur. Auctor enim semper egestas felis metus volutpat cursus tortor. Sit.',
        storenumber: '56hp103',
    },
    {
        id: 13,
        name: 'Male Suit',
        gender: 'Male',
        age: 'Ranges',
        price: 'N9,100,000',
        image: male8,
        description: 'Perfect male suit for any formal occasion.',
        availableSizes: ['L,', 'XL,'],
        colorOptions: ['Black', 'Gray'],
        rating: 4.8,
        location:'Nation wide',
        publisheddate :'5/12/2022',
        additionalinformation:'Lorem ipsum dolor sit amet consectetur. Auctor enim semper egestas felis metus volutpat cursus tortor. Sit.',
        storenumber: '56hp106',
    },
    {
        id: 14,
        name: 'Jacket cotton jeans',
        gender: 'Male',
        age: '0-11',
        price: 'N8,300,000',
        image: male1,
        description: 'Comfortable jacket with stylish cotton jeans.',
        availableSizes: ['XS,', 'S,', 'M'],
        colorOptions: ['Blue', 'Gray'],
        rating: 4.2,
        location:'Nation wide',
        publisheddate :'10/12/2022',
        additionalinformation:'Lorem ipsum dolor sit amet consectetur. Auctor enim semper egestas felis metus volutpat cursus tortor. Sit.',
        storenumber: '56hp110',
    },
    {
        id: 15,
        name: 'Skirt and pants',
        gender: 'Female',
        age: 'Ranges',
        price: 'N8,900,000',
        image: female1,
        description: 'Versatile set of skirt and pants.',
        availableSizes: ['S,', 'M,', 'L'],
        colorOptions: ['Black', 'White'],
        rating: 4.3,
        location:'Nation wide',
        publisheddate :'24/12/2022',
        additionalinformation:'Lorem ipsum dolor sit amet consectetur. Auctor enim semper egestas felis metus volutpat cursus tortor. Sit.',
        storenumber: '56hp122',
    },
    {
        id: 16,
        name: 'Jacket cotton jeans',
        gender: 'Male',
        age: '0-11',
        price: 'N8,100,000',
        image: male2,
        description: 'Stylish jacket paired with cotton jeans.',
        availableSizes: ['XS,', 'S,', 'M'],
        colorOptions: ['Blue', 'Black','orange'],
        rating: 4.4,
        location:'Nation wide',
        publisheddate :'12/12/2022',
        additionalinformation:'Lorem ipsum dolor sit amet consectetur. Auctor enim semper egestas felis metus volutpat cursus tortor. Sit.',
        storenumber: '56hp118',
    },
];

export default clothData;