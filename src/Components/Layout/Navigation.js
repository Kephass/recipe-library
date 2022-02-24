import React from 'react';
import { Link } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import {
	HomeOutlined,
	SearchOutlined,
	FileSearchOutlined,
	CalendarOutlined,
} from '@ant-design/icons';

function Navigation() {
	return (
		<Flex h='50px' alignItems='center' justifyContent='space-evenly'>
			<Link to='/'>
				<HomeOutlined />
			</Link>
			<Link to='/search'>
				<SearchOutlined />
			</Link>
			<Link to='/recipes'>
				<FileSearchOutlined />
			</Link>
			<Link to='/test'>
				<CalendarOutlined />
			</Link>
		</Flex>
	);
}

export default Navigation;
